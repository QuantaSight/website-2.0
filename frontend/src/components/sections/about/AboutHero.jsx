import React from 'react';
import { Building2, Users, Award, Globe } from 'lucide-react';

const AboutHero = ({ darkMode }) => {
    return (
        <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="main-container relative">
                {/* Company badge */}
                <div className="text-center mb-8 sm:mb-10">
                    <div className={`inline-flex items-center px-3 sm:px-4 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Building2 className="w-3 h-3 mr-2" />
                        Founded in 2022 • London, UK
                    </div>

                    <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Transforming Pharmaceutical Research
                        <span className="block text-xl sm:text-2xl lg:text-3xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Through Advanced AI
                        </span>
                    </h1>

                    <p className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-3xl mx-auto ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        QuantaSight is a cutting-edge machine intelligence company developing next-generation natural language solutions specifically designed for scientific teams in pharmaceutical and life sciences industries.
                    </p>
                </div>

                {/* Enhanced Key metrics with shadows */}
                {/*<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">*/}
                {/*    <div className={`text-center p-4 sm:p-6 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl ${*/}
                {/*        darkMode*/}
                {/*            ? 'glass-dark shadow-gray-900/20 hover:shadow-gray-900/30'*/}
                {/*            : 'glass-light shadow-blue-100/40 hover:shadow-blue-200/50'*/}
                {/*    }`}>*/}
                {/*        <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 drop-shadow-sm">98%</div>*/}
                {/*        <div className="text-xs text-gray-500">Accuracy Rate</div>*/}
                {/*    </div>*/}
                {/*    <div className={`text-center p-4 sm:p-6 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl ${*/}
                {/*        darkMode*/}
                {/*            ? 'glass-dark shadow-gray-900/20 hover:shadow-gray-900/30'*/}
                {/*            : 'glass-light shadow-blue-100/40 hover:shadow-blue-200/50'*/}
                {/*    }`}>*/}
                {/*        <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 drop-shadow-sm">70%</div>*/}
                {/*        <div className="text-xs text-gray-500">Time Reduction</div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Enhanced Mission statement with shadows */}
                <div className={`professional-card text-center p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                        : 'glass-light shadow-blue-100/60 hover:shadow-blue-200/70'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    <div className="max-w-2xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className={`p-3 sm:p-4 rounded-xl shadow-lg ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                            }`}>
                                <Globe className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                        </div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Mission</h2>
                        <p className={`text-sm leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            To accelerate scientific discovery and improve patient outcomes by providing pharmaceutical teams with AI-powered tools that transform complex research tasks from weeks of work into minutes of insight.
                        </p>
                    </div>
                </div>

                {/* Enhanced Trust indicators */}
                <div className="mt-1 sm:mt-1 pt-6 sm:pt-8 border-t border-gray-200/30">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-500 drop-shadow-sm" />
                            ISO 27001 Certified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;