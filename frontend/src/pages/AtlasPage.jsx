import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead';
import AtlasHero from '../components/sections/atlas/AtlasHero';
import AtlasFeatures from '../components/sections/atlas/AtlasFeatures';
import AtlasDashboard from '../components/sections/atlas/AtlasDashboard';

const AtlasPage = () => {
    const { darkMode } = useTheme();

    const schemaMarkup = [
        SchemaTemplates.softwareApplication(
            "Atlas - Pharmacovigilance & Drug Pipeline Monitoring Platform",
            "AI-powered pharmacovigilance platform for drug safety monitoring, pipeline tracking, and post-market surveillance. Advanced signal detection and real-time safety analysis for pharmaceutical companies.",
            [
                "Pharmacovigilance monitoring platform",
                "Drug pipeline database tracking",
                "Pharmaceutical safety surveillance",
                "AI-powered signal detection",
                "Drug development pipeline search",
                "Pharma R&D insights platform",
                "Competitor drug pipeline analysis",
                "Post-market drug surveillance",
                "Clinical safety monitoring",
                "Pharmaceutical compliance platform"
            ]
        ),
        SchemaTemplates.medicalWebPage(
            "Atlas - Pharmacovigilance & Drug Pipeline Platform",
            "Advanced AI-powered platform for pharmaceutical safety monitoring and drug development pipeline tracking",
            "Pharmacovigilance"
        )
    ];

    return (
        <>
            <SEOHead
                title="Atlas - Pharmacovigilance Platform & Drug Pipeline Database"
                description="Atlas by QuantaSight: AI-powered pharmacovigilance platform for drug safety monitoring and pipeline tracking. Advanced signal detection, post-market surveillance, and pharma R&D insights platform for pharmaceutical companies."
                keywords="pharmacovigilance platform, drug pipeline database, pharma pipeline tracking, biotech company research tracker, drug development pipeline search, pharma R&D insights platform, competitor drug pipeline analysis, pharmaceutical safety monitoring, AI signal detection, post-market surveillance"
                canonicalUrl="/atlas"
                schemaMarkup={schemaMarkup}
            />

            <div>
                <AtlasHero darkMode={darkMode} />
                <AtlasFeatures darkMode={darkMode} />
                <AtlasDashboard darkMode={darkMode} />
            </div>
        </>
    );
};

export default AtlasPage;