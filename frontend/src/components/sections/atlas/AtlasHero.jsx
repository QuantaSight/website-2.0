import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

// Professional Button Component
const PrimaryButton = ({ to, children, onClick, fullWidth = false }) => {
    const baseClasses = `px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to) {
        return (
            <Link to={to} className={baseClasses} style={{
                boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
            }}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses} style={{
            boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
        }}>
            {children}
        </button>
    );
};

const AtlasHero = ({ darkMode }) => {
    return (
        <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="main-container">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* Module badge */}
                        <div className={`inline-flex items-center px-3 sm:px-4 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                            darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                        }`}>
                            <Shield className="w-3 h-3 mr-2" />
                            Pharmacovigilance Module
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Pharmacovigilance Atlas
                            </span>
                            <br />
                            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl sm:text-2xl lg:text-3xl`}>
                                AI-Powered Safety Monitoring
                            </span>
                        </h1>

                        <p className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        } max-w-lg mx-auto lg:mx-0`}>
                            Agentic AI to monitor for signals as part of post-market surveillance. Identify potential safety concerns earlier with automated monitoring and analysis.
                        </p>

                        {/* Key benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <Zap className="w-5 h-5 text-blue-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Real-Time</div>
                                <div className="text-xs text-gray-500">Signal Detection</div>
                            </div>
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <AlertTriangle className="w-5 h-5 text-amber-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Early Warning</div>
                                <div className="text-xs text-gray-500">Risk Assessment</div>
                            </div>
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <Shield className="w-5 h-5 text-green-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">FDA Ready</div>
                                <div className="text-xs text-gray-500">Compliance</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <PrimaryButton to="/demo">
                                Request Demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </PrimaryButton>

                            <button className={`px-4 sm:px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                                darkMode
                                    ? 'glass-dark text-white hover:bg-gray-700/50'
                                    : 'glass-light text-gray-700 hover:bg-white/90'
                            }`}>
                                View Demo
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Enhanced demo container */}
                            <div className={`professional-card p-6 sm:p-8 transform hover:scale-105 transition-all duration-500 shadow-xl ${
                                darkMode
                                    ? 'glass-dark shadow-gray-900/25 hover:shadow-2xl hover:shadow-gray-900/40'
                                    : 'glass-card shadow-blue-100/60 hover:shadow-2xl hover:shadow-blue-200/70'
                            }`} style={{
                                boxShadow: darkMode
                                    ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                            }}>
                                {/* Mock interface */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium">Safety Monitoring</div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            <span className="text-xs text-green-600">Active</span>
                                        </div>
                                    </div>

                                    <div className={`p-3 rounded-lg text-xs ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        Monitoring 2,847 data sources for safety signals...
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs">
                                            <span>Signal Confidence</span>
                                            <span className="text-green-600">94%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                                        </div>
                                    </div>

                                    <div className={`p-3 rounded-lg border-l-4 border-amber-500 ${
                                        darkMode ? 'bg-amber-900/20' : 'bg-amber-50'
                                    }`}>
                                        <div className="text-xs font-medium text-amber-700 mb-1">High Priority Alert</div>
                                        <div className="text-xs text-gray-600">3 potential signals detected requiring review</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className={`absolute -top-3 -right-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium shadow-lg ${
                                darkMode ? 'text-green-400 shadow-gray-800/30' : 'text-green-700 shadow-green-200/50'
                            }`}>
                                99.2% Uptime
                            </div>

                            <div className={`absolute -bottom-3 -left-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium shadow-lg ${
                                darkMode ? 'text-blue-400 shadow-gray-800/30' : 'text-blue-700 shadow-blue-200/50'
                            }`}>
                                Real-time Analysis
                            </div>

                            {/* Background elements */}
                            <div className="absolute -z-10 top-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -z-10 bottom-10 left-10 w-20 sm:w-24 h-20 sm:h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtlasHero;