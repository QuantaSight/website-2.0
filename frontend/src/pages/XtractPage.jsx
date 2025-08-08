import React from 'react';
import { useTheme } from '../context/ThemeContext';
import XtractHero from '../components/sections/xtract/XtractHero';
import XtractFeatures from '../components/sections/xtract/XtractFeatures';
import SearchCapabilities from '../components/sections/xtract/SearchCapabilities';

const XtractPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <XtractHero darkMode={darkMode} />
            <XtractFeatures darkMode={darkMode} />
            <SearchCapabilities darkMode={darkMode} />
        </div>
    );
};

export default XtractPage;