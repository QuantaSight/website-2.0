import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        // Reset all animations when component mounts
        const resetAllAnimations = () => {
            const animatedElements = document.querySelectorAll([
                '.animate-on-scroll',
                '.fade-in',
                '.slide-up',
                '.slide-in-right',
                '.slide-in-left',
                '.scale-in',
                '.text-reveal',
                '.blur-to-focus',
                '.rotate-in',
                '.counter-animate',
                '.progressive-reveal'
            ].join(', '));

            animatedElements.forEach(el => {
                el.classList.remove('show', 'animated');
                // Reset any inline delays
                el.style.transitionDelay = '';
            });
        };

        // Reset animations first
        resetAllAnimations();

        // Intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add show class when entering viewport
                        entry.target.classList.add('show');

                        // Handle staggered animations
                        if (entry.target.classList.contains('stagger-1')) {
                            setTimeout(() => entry.target.classList.add('animated'), 100);
                        } else if (entry.target.classList.contains('stagger-2')) {
                            setTimeout(() => entry.target.classList.add('animated'), 200);
                        } else if (entry.target.classList.contains('stagger-3')) {
                            setTimeout(() => entry.target.classList.add('animated'), 300);
                        } else {
                            entry.target.classList.add('animated');
                        }

                        // Handle counter animations
                        if (entry.target.classList.contains('counter-animate')) {
                            animateCounters(entry.target);
                        }
                    } else {
                        // Remove classes when leaving viewport to allow re-animation
                        entry.target.classList.remove('show', 'animated');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        // Observe all animation elements after a short delay
        setTimeout(() => {
            const animateElements = document.querySelectorAll([
                '.animate-on-scroll',
                '.fade-in',
                '.slide-up',
                '.slide-in-right',
                '.slide-in-left',
                '.scale-in',
                '.text-reveal',
                '.blur-to-focus',
                '.rotate-in',
                '.counter-animate',
                '.progressive-reveal'
            ].join(', '));

            animateElements.forEach(el => observer.observe(el));
        }, 100);

        // Counter animation function
        const animateCounters = (container) => {
            const counters = container.querySelectorAll('[data-count]');

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
                const start = 0;
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(start + (target - start) * easeOutQuart);

                    counter.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                requestAnimationFrame(updateCounter);
            });
        };

        // Cleanup
        return () => {
            const animateElements = document.querySelectorAll([
                '.animate-on-scroll',
                '.fade-in',
                '.slide-up',
                '.slide-in-right',
                '.slide-in-left',
                '.scale-in',
                '.text-reveal',
                '.blur-to-focus',
                '.rotate-in',
                '.counter-animate',
                '.progressive-reveal'
            ].join(', '));

            animateElements.forEach(el => observer.unobserve(el));
        };
    }, []); // Empty dependency array ensures this runs on every mount
};

export default useScrollAnimation;