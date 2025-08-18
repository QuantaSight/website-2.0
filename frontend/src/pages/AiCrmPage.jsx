import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AiCrmHero from '../components/sections/AICrm/AiCrmHero';
import AiCrmFeatures from '../components/sections/AICrm/AiCrmFeatures';
import AiCrmAnalytics from '../components/sections/AICrm/AiCrmAnalytics';

const AiCrmPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <AiCrmHero darkMode={darkMode} />
            <AiCrmFeatures darkMode={darkMode} />
            <AiCrmAnalytics darkMode={darkMode} />
        </div>
    );
};

export default AiCrmPage;