import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead';
import AiCrmHero from '../components/sections/AICrm/AiCrmHero';
import AiCrmFeatures from '../components/sections/AICrm/AiCrmFeatures';
import AiCrmAnalytics from '../components/sections/AICrm/AiCrmAnalytics';

const AiCrmPage = () => {
    const { darkMode } = useTheme();

    const schemaMarkup = [
        SchemaTemplates.softwareApplication(
            "AI CRM - KOL Identification & Medical Affairs Platform",
            "Intelligent CRM system for healthcare organizations to track interactions with Key Opinion Leaders (KOLs), manage medical affairs projects, and analyze healthcare professional relationships with AI-powered insights.",
            [
                "KOL identification platform",
                "Medical expert database management",
                "Key opinion leaders tracking",
                "Healthcare professional CRM",
                "Medical affairs project management",
                "AI-powered relationship analysis",
                "Healthcare industry CRM",
                "Pharmaceutical relationship management"
            ]
        ),
        SchemaTemplates.medicalWebPage(
            "AI CRM for KOL Management & Medical Affairs",
            "Advanced CRM platform for managing relationships with key opinion leaders in medicine and healthcare professionals",
            "Medical Affairs"
        )
    ];

    return (
        <>
            {/* Add SEO component at the top */}
            <SEOHead
                title="AI CRM - KOL Identification Platform & Medical Affairs Management"
                description="AI CRM by QuantaSight: Advanced platform for KOL identification, key opinion leaders management, and medical affairs CRM. Track interactions with healthcare professionals, manage medical projects, and discover top researchers with AI-powered insights."
                keywords="KOL identification platform, key opinion leaders in medicine, medical expert database, AI CRM for healthcare, medical affairs management, top researchers identification, automated KOL discovery, healthcare professional CRM, pharmaceutical relationship management, medical affairs platform"
                canonicalUrl="/ai-crm"
                schemaMarkup={schemaMarkup}
            />

            {/* Your existing AI CRM page content remains the same */}
            <div>
                <AiCrmHero darkMode={darkMode} />
                <AiCrmFeatures darkMode={darkMode} />
                <AiCrmAnalytics darkMode={darkMode} />
            </div>
        </>
    );
};

export default AiCrmPage;