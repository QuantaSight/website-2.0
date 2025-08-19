// pages/HomePage.jsx - Add SEO to your existing homepage
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead'; // Add this import
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import ModulesOverview from '../components/sections/home/ModulesOverview';
import CTASection from '../components/sections/home/CTASection';
import Testimonials from '../components/sections/home/Testimonials';

const HomePage = () => {
    const { darkMode } = useTheme();

    // Add schema markup for better SEO
    const schemaMarkup = [
        SchemaTemplates.organization,
        SchemaTemplates.softwareApplication(
            "QuantaSight AI Medical Research Platform",
            "The most advanced AI-powered medical research platform for healthcare professionals, clinical researchers, and pharmaceutical companies. Features include medical search engine, KOL identification platform, drug pipeline analysis, and pharmacovigilance monitoring.",
            [
                "AI-powered medical search engine",
                "Clinical research search and analysis",
                "KOL identification and expert database",
                "Pharma pipeline database tracking",
                "Medical literature search capabilities",
                "Healthcare data search platform",
                "AI for medical research automation",
                "Drug development pipeline analysis",
                "Pharmacovigilance signal detection",
                "Medical knowledge graph generation"
            ]
        ),
        SchemaTemplates.medicalWebPage(
            "AI-Powered Medical Research Platform",
            "Advanced medical search engine and research platform for healthcare professionals",
            "Medical Research"
        )
    ];

    return (
        <>
            {/* Add SEO component at the top */}
            <SEOHead
                title="AI-Powered Medical Research Platform - Healthcare Search Engine"
                description="QuantaSight: The most advanced AI-powered medical research platform for healthcare professionals. Medical search engine, KOL identification, pharma pipeline analysis, and clinical research tools. Transform weeks of research into minutes with AI."
                keywords="medical search engine, AI-powered medical research platform, healthcare research search tool, clinical research search engine, medical literature search, KOL identification platform, pharma pipeline database, AI for medical research, healthcare data search platform, drug development pipeline search, medical expert database, AI drug discovery platforms"
                canonicalUrl="/"
                schemaMarkup={schemaMarkup}
            />

            {/* Your existing homepage content remains the same */}
            <div>
                <Hero darkMode={darkMode} />
                <Features darkMode={darkMode} />
                <ModulesOverview darkMode={darkMode} />
                <CTASection darkMode={darkMode} />
                <Testimonials darkMode={darkMode} />
            </div>
        </>
    );
};

export default HomePage;