import React from 'react';
import { Users, FileText, Shield, Clock, Globe, Zap } from 'lucide-react';

// Professional FeatureCard with glassmorphism
const FeatureCard = ({ title, description, icon, badge }) => {
    return (
        <div className={`professional-card p-6 sm:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl glass-card`} style={{
            boxShadow: '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
        }}>
            <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                    <div className="p-3 sm:p-4 rounded-xl bg-blue-50 shadow-lg transition-all duration-300 hover:scale-110">
                        {React.cloneElement(icon, {
                            className: "w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
                        })}
                    </div>
                    {badge && (
                        <div className="absolute -top-2 -right-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full shadow-lg">
                            {badge}
                        </div>
                    )}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                    {description}
                </p>
            </div>
        </div>
    );
};

const WorkroomFeatures = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-2 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Users className="w-3 h-3 mr-2" />
                        Collaboration Features
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Seamless Team Collaboration
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Enhance teamwork and accelerate content creation with our intuitive collaboration platform designed for pharmaceutical teams
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <FeatureCard
                        title="Real-Time Collaboration"
                        description="Work together in real-time with colleagues across departments and locations. Share insights, comment on documents, and track changes with comprehensive version history."
                        icon={<Users />}
                        badge="Live"
                    />

                    <FeatureCard
                        title="AI-Powered Content Generation"
                        description="Drag and drop AI-generated summaries into custom templates to rapidly create professional documents, presentations, and reports tailored to different audiences."
                        icon={<FileText />}
                        badge="AI"
                    />

                    <FeatureCard
                        title="Enterprise Security"
                        description="Control access to sensitive information with granular permission settings. Share content securely with internal teams or external stakeholders with audit trails."
                        icon={<Shield />}
                        badge="Secure"
                    />
                </div>

                {/* Additional Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
                    <div className={`p-5 sm:p-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                        darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                    }`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                            <h4 className="font-semibold">Version Control</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Track all document changes with intelligent version history and rollback capabilities.
                        </p>
                    </div>

                    <div className={`p-5 sm:p-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                        darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                    }`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                            <h4 className="font-semibold">Global Access</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Access your workspace from anywhere with cloud-based synchronization and offline support.
                        </p>
                    </div>

                    <div className={`p-5 sm:p-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                        darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                    }`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-0 sm:mr-3 mb-2 sm:mb-0" />
                            <h4 className="font-semibold">Instant Export</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Export documents in multiple formats including PDF, Word, PowerPoint, and regulatory formats.
                        </p>
                    </div>
                </div>

                {/* Trust indicators */}
                {/*<div className={`p-6 sm:p-8 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl ${*/}
                {/*    darkMode*/}
                {/*        ? 'glass-dark shadow-gray-900/20'*/}
                {/*        : 'glass-light shadow-blue-100/40'*/}
                {/*}`}>*/}
                {/*    <h3 className="text-lg font-semibold mb-6">Trusted by Pharmaceutical Teams</h3>*/}
                {/*    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 drop-shadow-sm">99.9%</div>*/}
                {/*            <div className="text-xs text-gray-500">Uptime</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1 drop-shadow-sm">500+</div>*/}
                {/*            <div className="text-xs text-gray-500">Active Users</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 drop-shadow-sm">50+</div>*/}
                {/*            <div className="text-xs text-gray-500">Document Types</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1 drop-shadow-sm">24/7</div>*/}
                {/*            <div className="text-xs text-gray-500">Support</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default WorkroomFeatures;