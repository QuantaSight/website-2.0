import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import XtractHero from '../components/sections/xtract/XtractHero';
import XtractFeatures from '../components/sections/xtract/XtractFeatures';
import SearchCapabilities from '../components/sections/xtract/SearchCapabilities';
import useScrollAnimation from '../hooks/useScrollAnimation';

const XtractPage = () => {
    const { darkMode } = useTheme();

    // Initialize scroll animations
    useScrollAnimation();

    return (
        <div>
            <XtractHero darkMode={darkMode} />
            <XtractFeatures darkMode={darkMode} />
            <SearchCapabilities darkMode={darkMode} />
        </div>
    );
};

export default XtractPage;