import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AtlasHero from '../components/sections/atlas/AtlasHero';
import AtlasFeatures from '../components/sections/atlas/AtlasFeatures';
import AtlasDashboard from '../components/sections/atlas/AtlasDashboard';

const AtlasPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <AtlasHero darkMode={darkMode} />
            <AtlasFeatures darkMode={darkMode} />
            <AtlasDashboard darkMode={darkMode} />
        </div>
    );
};

export default AtlasPage;