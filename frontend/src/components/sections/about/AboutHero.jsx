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
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="main-container relative">
                <div className="text-center mb-8 sm:mb-10">
                    <h1 className={`slide-up text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Transforming Pharmaceutical Research
                        <span className="slide-up stagger-1 block text-xl sm:text-2xl lg:text-3xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Through Advanced AI
                        </span>
                    </h1>

                    <p className={`slide-up stagger-2 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-3xl mx-auto ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        QuantaSight is a cutting-edge machine intelligence company developing next-generation natural language solutions specifically designed for scientific teams in pharmaceutical and life sciences industries.
                    </p>
                </div>

                <div className={`scale-in professional-card text-center p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
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
            </div>
        </section>
    );
};

export default AboutHero;