import React, { useEffect, useRef } from 'react';

const HeroAnimation = ({ darkMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;
        let mouse = { x: null, y: null, radius: 150 };

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        // Mouse leave handler
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Color schemes
        const colors = darkMode ? {
            blob1: ['#3b82f6', '#6366f1', '#60a5fa'],  // Blue to indigo to lighter blue (no purple)
            blob2: ['#60a5fa', '#818cf8', '#93c5fd'],  // Light blue shades (no purple)
            blob3: ['#3b82f6', '#60a5fa', '#93c5fd'],  // Pure blue gradient
            grid: 'rgba(59, 130, 246, 0.2)',
            gridGlow: 'rgba(147, 197, 253, 0.4)',
            particle: 'rgba(147, 197, 253, 0.6)',
            line: 'rgba(99, 102, 241, 0.3)'
        } : {
            blob1: ['#93c5fd', '#bfdbfe', '#dbeafe'],  // Very light blue shades only
            blob2: ['#bfdbfe', '#dbeafe', '#eff6ff'],  // Even lighter blue to almost white
            blob3: ['#93c5fd', '#dbeafe', '#bfdbfe'],  // Light blue gradient
            grid: 'rgba(59, 130, 246, 0.3)',
            gridGlow: 'rgba(59, 130, 246, 0.6)',
            particle: 'rgba(59, 130, 246, 0.7)',
            line: 'rgba(99, 102, 241, 0.4)',
            cardFill: 'rgba(255, 255, 255, 0.4)',
            cardBorder: 'rgba(59, 130, 246, 0.6)'
        };

        // Gradient Blob class
        class GradientBlob {
            constructor(x, y, radius, colorSet) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.baseRadius = radius;
                this.colors = colorSet;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = 0.0003 + Math.random() * 0.0005;
                this.morphSpeed = 0.001 + Math.random() * 0.002;
                this.morphPhase = Math.random() * Math.PI * 2;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
            }

            update() {
                this.angle += this.speed;
                this.morphPhase += this.morphSpeed;

                // Morph the radius
                this.radius = this.baseRadius + Math.sin(this.morphPhase) * (this.baseRadius * 0.2);

                // Slow drift
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < -this.radius || this.x > canvas.width + this.radius) this.vx *= -1;
                if (this.y < -this.radius || this.y > canvas.height + this.radius) this.vy *= -1;
            }

            draw() {
                ctx.save();

                // Create gradient
                const gradient = ctx.createRadialGradient(
                    this.x - this.radius * 0.3,
                    this.y - this.radius * 0.3,
                    0,
                    this.x,
                    this.y,
                    this.radius
                );

                gradient.addColorStop(0, this.colors[0]);
                gradient.addColorStop(0.5, this.colors[1]);
                gradient.addColorStop(1, this.colors[2]);

                ctx.fillStyle = gradient;
                ctx.globalAlpha = darkMode ? 0.0 : 0.18;

                // Draw blob with multiple circles for smooth gradient
                ctx.filter = 'blur(40px)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();

                ctx.filter = 'blur(60px)';
                ctx.globalAlpha = darkMode ? 0.05 : 0.12;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 1.2, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // 3D floating card/element
        class FloatingCard {
            constructor(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.baseY = y;
                this.width = width;
                this.height = height;
                this.rotation = (Math.random() - 0.5) * 0.1;
                this.rotationSpeed = (Math.random() - 0.5) * 0.003;
                this.floatSpeed = 0.002 + Math.random() * 0.003;
                this.floatPhase = Math.random() * Math.PI * 2;
                this.depth = Math.random() * 20 + 10;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
            }

            update() {
                this.floatPhase += this.floatSpeed;
                this.y = this.baseY + Math.sin(this.floatPhase) * 20;
                this.rotation += this.rotationSpeed;

                // Add horizontal movement
                this.x += this.vx;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) {
                    this.vx *= -1;
                    this.x = Math.max(0, Math.min(canvas.width, this.x));
                }

                // Mouse interaction - repel cards from cursor
                if (mouse.x && mouse.y) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minDistance = 200; // Detection radius

                    if (distance < minDistance) {
                        const force = (minDistance - distance) / minDistance;
                        const pushX = (dx / distance) * force * 5;
                        const pushY = (dy / distance) * force * 5;

                        // Add the push force to existing velocity
                        this.vx += pushX * 0.1;
                        this.vy += pushY * 0.1;

                        // Apply immediate position change
                        this.x += pushX;
                        this.y += pushY;

                        // Increase rotation when near mouse
                        this.rotation += force * 0.05;
                    }
                }

                // Dampen velocity
                this.vx *= 0.98;
                this.vy *= 0.98;

                // Apply vertical velocity
                this.baseY += this.vy;

                // Keep within bounds
                if (this.baseY < 0 || this.baseY > canvas.height) {
                    this.vy *= -1;
                    this.baseY = Math.max(0, Math.min(canvas.height, this.baseY));
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // Shadow for 3D depth
                ctx.fillStyle = darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)';
                ctx.filter = 'blur(15px)';
                ctx.fillRect(-this.width/2 + 5, -this.height/2 + 5, this.width, this.height);
                ctx.filter = 'none';

                // Main card with gradient - darker and more visible
                const gradient = ctx.createLinearGradient(
                    -this.width/2, -this.height/2,
                    this.width/2, this.height/2
                );

                if (darkMode) {
                    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
                    gradient.addColorStop(1, 'rgba(139, 92, 246, 0.2)');
                } else {
                    // Much more visible in light mode with white background
                    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
                }

                ctx.fillStyle = gradient;
                ctx.strokeStyle = darkMode ? 'rgba(147, 197, 253, 0.4)' : 'rgba(59, 130, 246, 0.7)';
                ctx.lineWidth = 2;

                // Rounded rectangle
                const radius = 8;
                ctx.beginPath();
                ctx.moveTo(-this.width/2 + radius, -this.height/2);
                ctx.lineTo(this.width/2 - radius, -this.height/2);
                ctx.quadraticCurveTo(this.width/2, -this.height/2, this.width/2, -this.height/2 + radius);
                ctx.lineTo(this.width/2, this.height/2 - radius);
                ctx.quadraticCurveTo(this.width/2, this.height/2, this.width/2 - radius, this.height/2);
                ctx.lineTo(-this.width/2 + radius, this.height/2);
                ctx.quadraticCurveTo(-this.width/2, this.height/2, -this.width/2, this.height/2 - radius);
                ctx.lineTo(-this.width/2, -this.height/2 + radius);
                ctx.quadraticCurveTo(-this.width/2, -this.height/2, -this.width/2 + radius, -this.height/2);
                ctx.closePath();

                ctx.fill();
                ctx.stroke();

                // Inner lines for detail
                ctx.strokeStyle = darkMode ? 'rgba(147, 197, 253, 0.2)' : 'rgba(59, 130, 246, 0.15)';
                ctx.beginPath();
                ctx.moveTo(-this.width/2 + 10, -this.height/2 + 20);
                ctx.lineTo(this.width/2 - 10, -this.height/2 + 20);
                ctx.stroke();

                ctx.restore();
            }
        }

        // Grid particle with glow
        class GridParticle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.04 + Math.random() * 0.05;
            }

            update() {
                this.pulsePhase += this.pulseSpeed;
                const offset = Math.sin(this.pulsePhase) * 5;
                this.x = this.baseX + offset;
                this.y = this.baseY + offset;

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= (dx / distance) * force * 15;
                        this.y -= (dy / distance) * force * 15;
                    }
                }
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;

                // Glow
                ctx.fillStyle = colors.gridGlow;
                ctx.globalAlpha = 0.3 * pulse;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
                ctx.fill();

                // Core
                ctx.fillStyle = colors.particle;
                ctx.globalAlpha = 0.6;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize elements
        const blobs = [];
        const floatingCards = [];
        const gridParticles = [];

        // Create gradient blobs
        blobs.push(new GradientBlob(canvas.width * 0.2, canvas.height * 0.3, 250, colors.blob1));
        blobs.push(new GradientBlob(canvas.width * 0.7, canvas.height * 0.6, 300, colors.blob2));
        blobs.push(new GradientBlob(canvas.width * 0.5, canvas.height * 0.8, 200, colors.blob3));

        // Create floating cards
        floatingCards.push(new FloatingCard(canvas.width * 0.15, canvas.height * 0.25, 120, 80));
        floatingCards.push(new FloatingCard(canvas.width * 0.85, canvas.height * 0.35, 100, 70));
        floatingCards.push(new FloatingCard(canvas.width * 0.8, canvas.height * 0.75, 110, 75));
        floatingCards.push(new FloatingCard(canvas.width * 0.1, canvas.height * 0.7, 90, 65));

        // Create grid particles
        const gridSpacing = 60;
        for (let x = gridSpacing; x < canvas.width; x += gridSpacing) {
            for (let y = gridSpacing; y < canvas.height; y += gridSpacing) {
                if (Math.random() > 0.5) {
                    gridParticles.push(new GridParticle(x, y));
                }
            }
        }

        // Draw grid lines
        const drawGrid = () => {
            ctx.strokeStyle = colors.grid;
            ctx.lineWidth = 1;
            ctx.globalAlpha = darkMode ? 0.4 : 0.5;

            const spacing = 60;

            // Vertical lines
            for (let x = spacing; x < canvas.width; x += spacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = spacing; y < canvas.height; y += spacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        // Draw connections between grid particles
        const drawConnections = () => {
            const maxDistance = 150;

            for (let i = 0; i < gridParticles.length; i++) {
                for (let j = i + 1; j < gridParticles.length; j++) {
                    const dx = gridParticles[i].x - gridParticles[j].x;
                    const dy = gridParticles[i].y - gridParticles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.4;
                        ctx.strokeStyle = colors.line;
                        ctx.lineWidth = 1;
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(gridParticles[i].x, gridParticles[i].y);
                        ctx.lineTo(gridParticles[j].x, gridParticles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Draw connections between floating cards
        const drawCardConnections = () => {
            const maxDistance = 400;

            for (let i = 0; i < floatingCards.length; i++) {
                for (let j = i + 1; j < floatingCards.length; j++) {
                    const dx = floatingCards[i].x - floatingCards[j].x;
                    const dy = floatingCards[i].y - floatingCards[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * (darkMode ? 0.25 : 0.4);

                        // Draw gradient line
                        const gradient = ctx.createLinearGradient(
                            floatingCards[i].x, floatingCards[i].y,
                            floatingCards[j].x, floatingCards[j].y
                        );
                        gradient.addColorStop(0, colors.line);
                        gradient.addColorStop(0.5, colors.gridGlow);
                        gradient.addColorStop(1, colors.line);

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 2.5;
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(floatingCards[i].x, floatingCards[i].y);
                        ctx.lineTo(floatingCards[j].x, floatingCards[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Draw mouse cursor effect - removed large circle, keeping interaction only

        // Animation loop
        const animate = () => {
            time++;

            // Clear canvas
            ctx.fillStyle = darkMode
                ? 'rgba(15, 23, 42, 1)'
                : 'rgba(239, 246, 255, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            drawGrid();

            // Draw and update blobs
            blobs.forEach(blob => {
                blob.update();
                blob.draw();
            });

            // Draw connections
            drawConnections();

            // Update and draw grid particles
            gridParticles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw card connections BEFORE drawing cards
            drawCardConnections();

            // Update and draw floating cards
            floatingCards.forEach(card => {
                card.update();
                card.draw();
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', setCanvasSize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full transition-all duration-300"
            style={{
                filter: 'contrast(1.05) brightness(1.02)',
                touchAction: 'none',
                cursor: 'default'
            }}
        />
    );
};

export default HeroAnimation;
