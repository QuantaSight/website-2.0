import React from 'react';
import { useTheme } from '../context/ThemeContext';
import WorkroomHero from '../components/sections/workroom/WorkroomHero';
import WorkroomFeatures from '../components/sections/workroom/WorkroomFeatures';
import DocumentGeneration from '../components/sections/workroom/DocumentGeneration';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WorkroomPage = () => {
    const { darkMode } = useTheme();
    useScrollAnimation();

    return (
        <div>
            <WorkroomHero darkMode={darkMode} />
            <WorkroomFeatures darkMode={darkMode} />
            <DocumentGeneration darkMode={darkMode} />
        </div>
    );
};

export default WorkroomPage;