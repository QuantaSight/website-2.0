import React from 'react';
import { Shield, Mail, Calendar, Lock, Eye, FileText, Users, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PolicySection = ({ icon, title, children }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`professional-card mb-8 transition-all duration-300 p-6 sm:p-8 ${
            darkMode
                ? 'glass-dark text-white shadow-xl shadow-gray-900/20'
                : 'glass-card text-gray-800 shadow-xl shadow-blue-100/50'
        }`} style={{
            boxShadow: darkMode
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 10px 20px -10px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}>
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-all duration-300 shadow-lg flex-shrink-0 ${
                    darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                }`}>
                    {React.cloneElement(icon, {
                        className: `w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                    })}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">{title}</h3>
                    <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ darkMode }) => {
    return (
        <div className={`professional-card p-6 sm:p-8 text-center transition-all duration-300 ${
            darkMode
                ? 'glass-dark shadow-xl shadow-gray-900/25'
                : 'glass-light shadow-xl shadow-blue-100/60'
        }`} style={{
            boxShadow: darkMode
                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
        }}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-blue-500/30'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-blue-600/40'
            }`}>
                <Mail className="w-8 h-8 text-white drop-shadow-sm" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Questions or Concerns?
            </h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Contact us regarding your privacy and data protection
            </p>
            <a
                href="mailto:info@quantasight.com"
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    darkMode
                        ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
            >
                <Mail className="w-4 h-4 mr-2" />
                info@quantasight.com
            </a>
        </div>
    );
};

const PrivacyPolicyPage = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'}`}>
            {/* Hero Section */}
            <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'}`}>
                <div className="main-container">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Trust Badge */}
                        <div className={`inline-flex items-center px-3 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                            darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                        }`}>
                            <Shield className="w-3 h-3 mr-2" />
                            Data Protection & Privacy
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Privacy Policy
                            </span>
                        </h1>

                        <p className={`text-base lg:text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                            Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
                        </p>

                        {/* Policy Details */}
                        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl transition-all duration-300 ${
                            darkMode
                                ? 'glass-dark shadow-xl shadow-gray-900/20'
                                : 'glass-light shadow-xl shadow-blue-100/40'
                        }`}>
                            <div className="text-center">
                                <Calendar className={`w-5 h-5 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                <div className="text-sm font-medium">Effective Date</div>
                                <div className="text-xs text-gray-500">January 1, 2025</div>
                            </div>
                            <div className="text-center">
                                <Globe className={`w-5 h-5 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                <div className="text-sm font-medium">Company</div>
                                <div className="text-xs text-gray-500">QuantaSight Ltd</div>
                            </div>
                            <div className="text-center">
                                <Mail className={`w-5 h-5 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                <div className="text-sm font-medium">Contact</div>
                                <div className="text-xs text-gray-500">info@quantasight.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-12 sm:py-16">
                <div className="main-container max-w-4xl">
                    <PolicySection icon={<FileText />} title="1. Introduction">
                        <p className="text-sm leading-relaxed">
                            This Privacy Policy outlines how we collect, use, and protect your personal information when you submit your data through our LinkedIn Lead Generation Ads or other lead forms. By providing your information, you agree to the terms of this Privacy Policy.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Eye />} title="2. Information We Collect">
                        <p className="text-sm leading-relaxed mb-4">
                            When you interact with our LinkedIn ads or fill out a lead form, we may collect the following information:
                        </p>
                        <ul className="text-sm space-y-2 list-disc list-inside ml-4">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Job title</li>
                            <li>Company name</li>
                            <li>LinkedIn profile (if provided)</li>
                            <li>Any other information you choose to share</li>
                        </ul>
                    </PolicySection>

                    <PolicySection icon={<Users />} title="3. How We Use Your Information">
                        <p className="text-sm leading-relaxed mb-4">
                            We use the collected information to:
                        </p>
                        <ul className="text-sm space-y-2 list-disc list-inside ml-4">
                            <li>Contact you regarding our services, offers, or products</li>
                            <li>Send you marketing emails or newsletters (you may opt out anytime)</li>
                            <li>Improve our advertising, outreach, and service offerings</li>
                            <li>Respond to your inquiries or requests</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </PolicySection>

                    <PolicySection icon={<Globe />} title="4. Data Sharing and Disclosure">
                        <p className="text-sm leading-relaxed mb-4">
                            We do not sell or rent your personal information. However, we may share your data with:
                        </p>
                        <ul className="text-sm space-y-2 list-disc list-inside ml-4 mb-4">
                            <li>Third-party service providers that help us manage campaigns, email communications, or analytics</li>
                            <li>CRM and marketing platforms (e.g., HubSpot, Mailchimp, etc.)</li>
                            <li>Legal authorities if required by law</li>
                        </ul>
                        <p className="text-sm leading-relaxed">
                            All third parties are required to respect the confidentiality of your information and comply with applicable privacy laws.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Lock />} title="5. Data Security">
                        <p className="text-sm leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Shield />} title="6. Your Data Rights">
                        <p className="text-sm leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="text-sm space-y-2 list-disc list-inside ml-4 mb-4">
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of future communications</li>
                        </ul>
                        <p className="text-sm leading-relaxed">
                            To exercise any of these rights, contact us at <strong>info@quantasight.com</strong>.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Eye />} title="7. Cookies and Tracking">
                        <p className="text-sm leading-relaxed">
                            We may use cookies or LinkedIn Insight Tags to track ad performance and improve our campaigns. You can manage your cookie preferences through your browser settings or LinkedIn's ad settings.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Calendar />} title="8. Updates to This Policy">
                        <p className="text-sm leading-relaxed">
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
                        </p>
                    </PolicySection>

                    <PolicySection icon={<Mail />} title="9. Contact Us">
                        <p className="text-sm leading-relaxed mb-4">
                            If you have any questions or concerns about this Privacy Policy or how your data is used, please contact us at:
                        </p>
                        <div className="space-y-2 text-sm">
                            <p><strong>Email:</strong> <strong>info@quantasight.com</strong></p>
                            <p><strong>Company:</strong> QuantaSight Ltd, London, UK</p>
                        </div>
                    </PolicySection>

                    {/* Contact Card */}
                    <ContactCard darkMode={darkMode} />
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;