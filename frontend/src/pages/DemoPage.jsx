import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead';
import DemoHero from '../components/sections/demo/DemoHero';
import DemoForm from '../components/sections/demo/DemoForm';
import FAQ from '../components/sections/demo/FAQ';

const DemoPage = () => {
    const { darkMode } = useTheme();

    const schemaMarkup = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Request Demo - QuantaSight Medical Research Platform",
            "description": "Schedule a personalized demo of QuantaSight's AI-powered medical research platform",
            "url": "https://quantasight.com/demo"
        }
    ];

    return (
        <>
            <SEOHead
                title="Request Demo - AI Medical Research Platform | QuantaSight"
                description="Schedule a personalized demo of QuantaSight's AI-powered medical research platform. See how our medical search engine, KOL identification, and research tools can transform your workflow. Book your free demo today."
                keywords="medical research platform demo, AI healthcare demo, pharmaceutical research demo, clinical research platform demo, medical search engine demo, KOL identification demo, healthcare AI demonstration"
                canonicalUrl="/demo"
                schemaMarkup={schemaMarkup}
            />

            <div>
                <DemoHero darkMode={darkMode} />
                <DemoForm darkMode={darkMode} />
                <FAQ darkMode={darkMode} />
            </div>
        </>
    );
};

export default DemoPage;