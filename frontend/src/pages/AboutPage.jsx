import React from 'react';
import { useTheme } from '../context/ThemeContext';
import SEOHead, { SchemaTemplates } from '../components/SEO/SEOHead';
import AboutHero from '../components/sections/about/AboutHero';
import MissionVision from '../components/sections/about/MissionVision';
import Team from '../components/sections/about/Team';
import ISO from '../components/sections/about/ISO';

const AboutPage = () => {
    const { darkMode } = useTheme();

    const schemaMarkup = [
        SchemaTemplates.organization,
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About QuantaSight - AI Medical Research Platform",
            "description": "Learn about QuantaSight's mission to transform pharmaceutical research with AI-powered platforms for healthcare professionals and medical researchers.",
            "mainEntity": {
                "@type": "Organization",
                "name": "QuantaSight",
                "foundingDate": "2022",
                "founder": {
                    "@type": "Person",
                    "name": "Dr. Sameer Trikha",
                    "jobTitle": "Founder & CEO"
                }
            }
        }
    ];

    return (
        <>
            <SEOHead
                title="About QuantaSight - AI Medical Research Platform Company"
                description="Learn about QuantaSight's mission to transform pharmaceutical research with AI. Founded by Dr. Sameer Trikha, we're revolutionizing healthcare research with advanced AI platforms for medical professionals and researchers."
                keywords="QuantaSight company, AI medical research platform, pharmaceutical AI technology, healthcare AI company, medical research innovation, Dr. Sameer Trikha, healthcare technology company, medical AI solutions"
                canonicalUrl="/about"
                schemaMarkup={schemaMarkup}
            />

            <div>
                <AboutHero darkMode={darkMode} />
                <MissionVision darkMode={darkMode} />
                <Team darkMode={darkMode} />
                <ISO darkMode={darkMode} />
            </div>
        </>
    );
};

export default AboutPage;