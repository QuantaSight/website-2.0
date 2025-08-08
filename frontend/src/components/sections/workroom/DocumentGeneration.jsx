import React from 'react';
import { ChevronRight, FileText, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const DocumentGeneration = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="main-container">
                <div className={`professional-card p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                        : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="lg:w-1/2">
                            {/* Section header */}
                            <div className="mb-8">
                                <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                                    darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                                }`}>
                                    <FileText className="w-3 h-3 mr-2" />
                                    Document Creation
                                </div>

                                <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    Multi-Format Content Creation
                                </h2>

                                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    Transform research findings into polished, audience-specific documents with just a few clicks. Our AI-powered templates help you create consistent, high-quality content in various formats that you can defend in any meeting.
                                </p>
                            </div>

                            {/* Enhanced feature list */}
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className={`p-2 rounded-lg mr-4 shadow-lg transition-all duration-300 ${
                                        darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                                    }`}>
                                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold mb-2 flex flex-col sm:flex-row sm:items-center">
                                            <span>Scientific Publications</span>
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 sm:mt-0 sm:ml-2" />
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Manuscript drafts, poster presentations, and conference abstracts with automatic citation formatting and regulatory compliance checks.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className={`p-2 rounded-lg mr-4 shadow-lg transition-all duration-300 ${
                                        darkMode ? 'bg-green-500/20 shadow-green-500/20' : 'bg-green-50 shadow-green-200/30'
                                    }`}>
                                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold mb-2 flex flex-col sm:flex-row sm:items-center">
                                            <span>Regulatory Documents</span>
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 sm:mt-0 sm:ml-2" />
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Clinical evaluation reports, safety updates, and submission documents with built-in FDA and EMA formatting standards.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className={`p-2 rounded-lg mr-4 shadow-lg transition-all duration-300 ${
                                        darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                                    }`}>
                                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold mb-2 flex flex-col sm:flex-row sm:items-center">
                                            <span>Medical Communications</span>
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 sm:mt-0 sm:ml-2" />
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            HCP educational materials, advisory board briefing documents, and MSL resources with audience-specific customization.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className={`p-2 rounded-lg mr-4 shadow-lg transition-all duration-300 ${
                                        darkMode ? 'bg-indigo-500/20 shadow-indigo-500/20' : 'bg-indigo-50 shadow-indigo-200/30'
                                    }`}>
                                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold mb-2 flex flex-col sm:flex-row sm:items-center">
                                            <span>Market Access Materials</span>
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 sm:mt-0 sm:ml-2" />
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Value dossiers, payer presentations, and health economic summaries with real-world evidence integration.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick stats */}
                            <div className="mt-8 pt-6 border-t border-gray-200/30">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-base sm:text-lg font-bold text-blue-600 drop-shadow-sm">50+</div>
                                        <div className="text-xs text-gray-500">Templates</div>
                                    </div>
                                    <div>
                                        <div className="text-base sm:text-lg font-bold text-green-600 drop-shadow-sm">10+</div>
                                        <div className="text-xs text-gray-500">Formats</div>
                                    </div>
                                    <div>
                                        <div className="text-base sm:text-lg font-bold text-purple-600 drop-shadow-sm">95%</div>
                                        <div className="text-xs text-gray-500">Time Saved</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="relative">
                                {/* Enhanced image container */}
                                <div className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 ${
                                    darkMode ? 'shadow-gray-900/30' : 'shadow-blue-200/50'
                                }`}>
                                    <img
                                        src="/api/placeholder/600/400"
                                        alt="Document Generation Interface"
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Floating badges */}
                                <div className={`absolute -top-3 -right-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-blue-700 shadow-lg ${
                                    darkMode ? 'shadow-gray-800/30' : 'shadow-blue-200/50'
                                }`}>
                                    AI-Powered
                                </div>

                                <div className={`absolute -bottom-3 -left-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-green-700 shadow-lg ${
                                    darkMode ? 'shadow-gray-800/30' : 'shadow-green-200/50'
                                }`}>
                                    FDA Compliant
                                </div>

                                {/* Background decoration */}
                                <div className="absolute -z-10 top-6 right-6 w-16 sm:w-20 h-16 sm:h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
                                <div className="absolute -z-10 bottom-6 left-6 w-12 sm:w-16 h-12 sm:h-16 bg-purple-400/20 rounded-full blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocumentGeneration;