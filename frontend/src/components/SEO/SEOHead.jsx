import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
                     title,
                     description,
                     keywords,
                     canonicalUrl,
                     ogImage = '/images/quantasight-og-default.jpg',
                     ogType = 'website',
                     schemaMarkup,
                     noIndex = false,
                     additionalMeta = []
                 }) => {
    const siteUrl = 'https://quantasight.com';
    const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
    const fullTitle = title ? `${title} | QuantaSight` : 'QuantaSight - AI-Powered Medical Research Platform';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonicalUrl && <link rel="canonical" href={fullUrl} />}

            {/* Robots */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="QuantaSight" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Additional Meta Tags */}
            {additionalMeta.map((meta, index) => (
                <meta key={index} {...meta} />
            ))}

            {/* Schema.org Markup */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
        </Helmet>
    );
};

// Predefined schema templates
export const SchemaTemplates = {
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "QuantaSight",
        "url": "https://quantasight.com",
        "logo": "https://quantasight.com/images/logo.png",
        "description": "AI-powered medical research platform for healthcare professionals, clinical researchers, and pharmaceutical companies. Features medical search engine, KOL identification, and drug pipeline analysis.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "GB",
            "addressLocality": "London"
        },
        "sameAs": [
            "https://linkedin.com/company/quantasight",
            "https://twitter.com/quantasight"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-XXX-XXX-XXXX",
            "contactType": "customer service",
            "email": "support@quantasight.com"
        }
    },

    softwareApplication: (name, description, features) => ({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": name,
        "description": description,
        "applicationCategory": "Medical Research Software",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": features,
        "provider": {
            "@type": "Organization",
            "name": "QuantaSight"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Healthcare Professionals"
        }
    }),

    medicalWebPage: (title, description, specialty) => ({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": title,
        "description": description,
        "medicalAudience": {
            "@type": "MedicalAudience",
            "audienceType": "Healthcare Professional"
        },
        "about": {
            "@type": "MedicalSpecialty",
            "name": specialty || "General Medicine"
        }
    }),

    faqPage: (faqs) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    })
};

export default SEOHead;