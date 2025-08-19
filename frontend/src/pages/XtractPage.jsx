// pages/XtractPage.jsx - Add SEO to your existing Xtract page
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead'; // Add this import
import XtractHero from '../components/sections/xtract/XtractHero';
import XtractFeatures from '../components/sections/xtract/XtractFeatures';
import SearchCapabilities from '../components/sections/xtract/SearchCapabilities';

const XtractPage = () => {
    const { darkMode } = useTheme();

    // Add schema markup for Xtract specifically
    const schemaMarkup = [
        SchemaTemplates.softwareApplication(
            "Xtract - AI Medical Document Analysis & Research Intelligence",
            "Advanced AI-powered tool for extracting insights from medical documents, clinical research papers, patents, and healthcare data. Transform weeks of medical research into minutes with intelligent analysis and summarization.",
            [
                "AI-powered medical document analysis",
                "Clinical research paper extraction",
                "Medical literature search and analysis",
                "Healthcare data processing",
                "Scientific paper summarization",
                "Patent analysis for pharmaceuticals",
                "Clinical guidelines extraction",
                "Medical knowledge discovery",
                "Evidence-based medicine research",
                "Healthcare intelligence platform"
            ]
        ),
        SchemaTemplates.medicalWebPage(
            "Xtract - AI Medical Research & Document Analysis",
            "AI-powered platform for analyzing medical literature, clinical research, and healthcare documents",
            "Medical Informatics"
        )
    ];

    return (
        <>
            {/* Add SEO component at the top */}
            <SEOHead
                title="Xtract - AI Medical Research & Document Analysis Tool"
                description="Xtract by QuantaSight: Advanced AI-powered tool for medical literature analysis, clinical research extraction, and healthcare document processing. Extract insights from scientific papers, patents, and clinical guidelines with AI precision."
                keywords="medical literature search, AI medical document analysis, clinical research search engine, medical paper analysis, healthcare data extraction, scientific literature review, clinical research tool, medical knowledge extraction, AI for medical research, evidence-based medicine search"
                canonicalUrl="/xtract"
                schemaMarkup={schemaMarkup}
            />

            {/* Your existing Xtract page content remains the same */}
            <div>
                <XtractHero darkMode={darkMode} />
                <XtractFeatures darkMode={darkMode} />
                <SearchCapabilities darkMode={darkMode} />
            </div>
        </>
    );
};

export default XtractPage;