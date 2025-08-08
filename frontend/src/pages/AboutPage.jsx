import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AboutHero from '../components/sections/about/AboutHero';
import Founder from '../components/sections/about/Founder';
import MissionVision from '../components/sections/about/MissionVision';
import Team from '../components/sections/about/Team';
import ISO from '../components/sections/about/ISO';

const AboutPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <AboutHero darkMode={darkMode} />
            <Founder darkMode={darkMode} />
            <MissionVision darkMode={darkMode} />
            <Team darkMode={darkMode} />
            <ISO darkMode={darkMode} />
        </div>
    );
};

export default AboutPage;