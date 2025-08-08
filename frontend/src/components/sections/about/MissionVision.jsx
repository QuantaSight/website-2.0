import React from 'react';
import { Target, Eye, Lightbulb, Rocket } from 'lucide-react';

const MissionVision = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="main-container">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Target className="w-3 h-3 mr-2" />
                        Our Purpose
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Mission & Vision
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Driving the future of pharmaceutical research through innovative AI solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {/* Mission Card */}
                    <div className={`professional-card p-6 sm:p-8 h-full flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                            }`}>
                                <Target className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            <h3 className={`text-lg sm:text-xl font-semibold sm:ml-4 ${
                                darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                Our Mission
                            </h3>
                        </div>
                        <p className={`text-sm leading-relaxed flex-1 mb-6 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            At QuantaSight, our mission is to empower scientific teams with AI-driven tools that dramatically accelerate research, development, and market surveillance processes. We aim to transform weeks of work into minutes, allowing brilliant minds to focus on innovation rather than routine tasks.
                        </p>

                        {/* Mission highlights */}
                        <div className="mt-auto pt-6 border-t border-gray-200/30">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-base sm:text-lg font-bold text-blue-600 drop-shadow-sm">Weeks → Minutes</div>
                                    <div className="text-xs text-gray-500">Time Reduction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-base sm:text-lg font-bold text-green-600 drop-shadow-sm">AI-Driven</div>
                                    <div className="text-xs text-gray-500">Innovation</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className={`professional-card p-6 sm:p-8 h-full flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                            }`}>
                                <Eye className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                            </div>
                            <h3 className={`text-lg sm:text-xl font-semibold sm:ml-4 ${
                                darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                Our Vision
                            </h3>
                        </div>
                        <p className={`text-sm leading-relaxed flex-1 mb-6 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            We envision a future where AI and human expertise work seamlessly together to advance healthcare and life sciences. QuantaSight strives to be at the forefront of this revolution, creating intelligent solutions that enhance human capabilities and accelerate scientific progress.
                        </p>

                        {/* Vision highlights */}
                        <div className="mt-auto pt-6 border-t border-gray-200/30">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-base sm:text-lg font-bold text-purple-600 drop-shadow-sm">AI + Human</div>
                                    <div className="text-xs text-gray-500">Collaboration</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-base sm:text-lg font-bold text-indigo-600 drop-shadow-sm">Healthcare</div>
                                    <div className="text-xs text-gray-500">Advancement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className={`professional-card p-6 sm:p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/20'
                        : 'glass-light shadow-blue-100/40'
                }`}>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-lg font-semibold mb-6">Core Values</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <div className={`p-3 rounded-full mb-3 ${
                                    darkMode ? 'bg-green-500/20' : 'bg-green-100'
                                }`}>
                                    <Lightbulb className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                                </div>
                                <h4 className="font-medium mb-2">Innovation</h4>
                                <p className="text-xs text-gray-500">Pioneering AI solutions for pharmaceutical research</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={`p-3 rounded-full mb-3 ${
                                    darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                                }`}>
                                    <Target className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                </div>
                                <h4 className="font-medium mb-2">Precision</h4>
                                <p className="text-xs text-gray-500">Delivering accurate and reliable scientific insights</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={`p-3 rounded-full mb-3 ${
                                    darkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                                }`}>
                                    <Rocket className={`w-6 h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                </div>
                                <h4 className="font-medium mb-2">Impact</h4>
                                <p className="text-xs text-gray-500">Accelerating healthcare advancement globally</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;