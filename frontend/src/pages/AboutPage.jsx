import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AboutHero from '../components/sections/about/AboutHero';
import MissionVision from '../components/sections/about/MissionVision';
import Team from '../components/sections/about/Team';
import ISO from '../components/sections/about/ISO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage = () => {
    const { darkMode } = useTheme();
    useScrollAnimation();

    return (
        <div>
            <AboutHero darkMode={darkMode} />
            <MissionVision darkMode={darkMode} />
            <Team darkMode={darkMode} />
            <ISO darkMode={darkMode} />
        </div>
    );
};

export default AboutPage;