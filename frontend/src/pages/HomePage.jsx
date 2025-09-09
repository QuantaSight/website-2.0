import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import ModulesOverview from '../components/sections/home/ModulesOverview';
import CTASection from '../components/sections/home/CTASection';
import Testimonials from '../components/sections/home/Testimonials';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HomePage = () => {
    const { darkMode } = useTheme();

    useScrollAnimation();

    return (
        <div>
            <Hero darkMode={darkMode} />
            <Features darkMode={darkMode} />
            <ModulesOverview darkMode={darkMode} />
            <CTASection darkMode={darkMode} />
            <Testimonials darkMode={darkMode} />
        </div>
    );
};

export default HomePage;