import React from 'react';
import { useTheme } from '../context/ThemeContext';
import DemoHero from '../components/sections/demo/DemoHero';
import DemoForm from '../components/sections/demo/DemoForm';
import DemoTestimonials from '../components/sections/demo/DemoTestimonials';
import FAQ from '../components/sections/demo/FAQ';

const DemoPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <DemoHero darkMode={darkMode} />
            <DemoForm darkMode={darkMode} />
            <DemoTestimonials darkMode={darkMode} />
            <FAQ darkMode={darkMode} />
        </div>
    );
};

export default DemoPage;