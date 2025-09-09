import React from 'react';
import { useTheme } from '../context/ThemeContext';
import DemoHero from '../components/sections/demo/DemoHero';
import DemoForm from '../components/sections/demo/DemoForm';
import DemoTestimonials from '../components/sections/demo/DemoTestimonials';
import FAQ from '../components/sections/demo/FAQ';
import useScrollAnimation from '../hooks/useScrollAnimation';

const DemoPage = () => {
    const { darkMode } = useTheme();

    useScrollAnimation();

    return (
        <div>
            <DemoHero darkMode={darkMode} />
            <DemoForm darkMode={darkMode} />
            <FAQ darkMode={darkMode} />
        </div>
    );
};

export default DemoPage;