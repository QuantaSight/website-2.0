import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Select all elements with animation classes
        document.querySelectorAll('.fade-in, .slide-up, .slide-in-right').forEach((el) => {
            observer.observe(el);
        });

        // For animated elements
        const animatedObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            animatedObserver.observe(el);
        });

        return () => {
            document.querySelectorAll('.fade-in, .slide-up, .slide-in-right').forEach((el) => {
                observer.unobserve(el);
            });
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                animatedObserver.unobserve(el);
            });
        };
    }, []);
};

export default useScrollAnimation;