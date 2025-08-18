import React from 'react';
import { Database, Brain, MessageSquare } from 'lucide-react';

// Professional FeatureCard with glassmorphism
const FeatureCard = ({ title, description, icon, darkMode }) => {
    return (
        <div className={`professional-card group hover:-translate-y-1 min-h-[260px] sm:min-h-[280px] flex flex-col transition-all duration-300 p-6 sm:p-8 ${
            darkMode
                ? 'glass-dark text-white shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30'
                : 'glass-card text-gray-800 shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/60'
        }`} style={{
            boxShadow: darkMode
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 10px 20px -10px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}>
            <div className="flex flex-col items-center text-center">
                <div className={`mb-6 p-3 sm:p-4 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                }`}>
                    {React.cloneElement(icon, {
                        className: `w-10 h-10 sm:w-12 sm:h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                    })}
                </div>
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

const AtlasFeatures = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Brain className="w-3 h-3 mr-2" />
                        AI-Powered Detection
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Proactive Signal Detection
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Harness the power of AI to continuously monitor and analyze data from multiple sources for early safety signal detection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    <FeatureCard
                        title="Automated Monitoring"
                        description="Continuously scan scientific literature, social media, regulatory databases, and other sources to identify potential safety signals as they emerge."
                        icon={<Database />}
                        darkMode={darkMode}
                    />

                    <FeatureCard
                        title="AI-Powered Analysis"
                        description="Advanced natural language processing algorithms assess the clinical relevance and potential impact of detected signals, prioritizing those requiring immediate attention."
                        icon={<Brain />}
                        darkMode={darkMode}
                    />

                    <FeatureCard
                        title="Real-Time Alerts"
                        description="Receive instant notifications about critical safety signals, allowing your team to respond rapidly to emerging issues and minimize potential risks."
                        icon={<MessageSquare />}
                        darkMode={darkMode}
                    />
                </div>

                {/* Enhanced monitoring sources */}
                <div className={`professional-card p-6 sm:p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/20'
                        : 'glass-light shadow-blue-100/40'
                }`}>
                    <h3 className="text-lg font-semibold mb-6">Comprehensive Data Sources</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 ${
                                darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                            }`}>
                                <Database className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            <div className="text-sm font-medium mb-1">Scientific Literature</div>
                            <div className="text-xs text-gray-500">PubMed, Clinical Journals</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 ${
                                darkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                            }`}>
                                <Brain className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                            </div>
                            <div className="text-sm font-medium mb-1">Regulatory Databases</div>
                            <div className="text-xs text-gray-500">FDA FAERS, EMA</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 ${
                                darkMode ? 'bg-amber-500/20' : 'bg-amber-100'
                            }`}>
                                <Database className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                            </div>
                            <div className="text-sm font-medium mb-1">Clinical Trial Data</div>
                            <div className="text-xs text-gray-500">ClinicalTrials.gov</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 ${
                                darkMode ? 'bg-green-500/20' : 'bg-green-100'
                            }`}>
                                <Brain className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                            </div>
                            <div className="text-sm font-medium mb-1">Patent Databases</div>
                            <div className="text-xs text-gray-500">USPTO, Google Patents</div>
                        </div>
                    </div>
                </div>

                {/* Performance metrics */}
                {/*<div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/50">*/}
                {/*    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 drop-shadow-sm">99.2%</div>*/}
                {/*            <div className="text-xs text-gray-500">Detection Accuracy</div>*/}
                {/*        </div>*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1 drop-shadow-sm">&lt;24h</div>*/}
                {/*            <div className="text-xs text-gray-500">Average Response Time</div>*/}
                {/*        </div>*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 drop-shadow-sm">2.8M</div>*/}
                {/*            <div className="text-xs text-gray-500">Sources Monitored</div>*/}
                {/*        </div>*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1 drop-shadow-sm">24/7</div>*/}
                {/*            <div className="text-xs text-gray-500">Continuous Monitoring</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default AtlasFeatures;