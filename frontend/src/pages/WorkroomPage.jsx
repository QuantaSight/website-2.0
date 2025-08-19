import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead';
import WorkroomHero from '../components/sections/workroom/WorkroomHero';
import WorkroomFeatures from '../components/sections/workroom/WorkroomFeatures';
import DocumentGeneration from '../components/sections/workroom/DocumentGeneration';

const WorkroomPage = () => {
    const { darkMode } = useTheme();

    const schemaMarkup = [
        SchemaTemplates.softwareApplication(
            "QS Workroom - Medical Document Collaboration Platform",
            "Collaborative content creation platform for medical teams. Generate professional medical documents, research reports, and clinical communications with AI-powered templates and real-time collaboration.",
            [
                "Medical document collaboration",
                "Healthcare content creation",
                "Medical writing platform",
                "Clinical document generation",
                "Research report creation",
                "Medical communications tool",
                "Healthcare team collaboration",
                "AI-powered medical writing"
            ]
        )
    ];

    return (
        <>
            <SEOHead
                title="QS Workroom - Medical Document Collaboration Platform"
                description="QS Workroom by QuantaSight: Collaborative platform for medical document creation and team collaboration. Generate professional medical reports, research documents, and clinical communications with AI-powered templates."
                keywords="medical document collaboration, healthcare content creation, medical writing platform, clinical document generation, research report creation, medical communications, healthcare team collaboration, AI medical writing"
                canonicalUrl="/workroom"
                schemaMarkup={schemaMarkup}
            />

            <div>
                <WorkroomHero darkMode={darkMode} />
                <WorkroomFeatures darkMode={darkMode} />
                <DocumentGeneration darkMode={darkMode} />
            </div>
        </>
    );
};

export default WorkroomPage;
