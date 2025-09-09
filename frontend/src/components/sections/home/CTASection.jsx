import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Shield, Clock } from 'lucide-react';

const CTASection = ({ darkMode }) => {
    return (
        <section className="py-12 sm:py-16">
            <div className="main-container">
                <div className={`professional-card overflow-hidden relative transition-all duration-300 ${
                    darkMode
                        ? 'glass-dark shadow-xl shadow-gray-900/25'
                        : 'glass-light shadow-xl shadow-blue-100/60'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                    </div>

                    <div className="relative p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-2/3 text-center lg:text-left">
                                {/* Badge */}
                                <div className={`slide-up inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                                    darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                                }`}>
                                    <Calendar className="w-3 h-3 mr-2" />
                                    Ready to Get Started?
                                </div>

                                <h2 className="slide-up stagger-1 text-xl sm:text-2xl font-bold mb-4">
                                    Accelerate Your Research Today
                                </h2>

                                <p className="slide-up stagger-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0">
                                    Join leading pharmaceutical companies using QuantaSight to transform their research workflows. Schedule a personalized demonstration tailored to your team's specific needs.
                                </p>

                                {/* Features list */}
                                <div className="scale-in stagger-3 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 text-xs sm:text-sm">
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <Clock className="w-4 h-4 text-green-500 mr-2 drop-shadow-sm" />
                                        <span>30-min Demo</span>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <Calendar className="w-4 h-4 text-green-500 mr-2 drop-shadow-sm" />
                                        <span>No Commitment</span>
                                    </div>
                                </div>

                                <div className="slide-up stagger-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                    <Link
                                        to="/demo"
                                        className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                                        style={{
                                            boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
                                        }}
                                    >
                                        Schedule Demo
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>

                                    <Link
                                        to="/about"
                                        className={`inline-flex items-center justify-center px-4 sm:px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            darkMode
                                                ? 'glass-dark text-white hover:bg-gray-700/50'
                                                : 'glass-light text-gray-700 hover:bg-white/90'
                                        }`}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/3 flex justify-center">
                                <div className="relative">
                                    {/* Main illustration container */}
                                    <div className={`slide-in-right p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                                        darkMode
                                            ? 'glass-dark shadow-xl shadow-gray-900/20'
                                            : 'glass-card shadow-xl shadow-blue-100/50'
                                    }`} style={{
                                        boxShadow: darkMode
                                            ? '0 10px 25px -5px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                            : '0 10px 25px -5px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                                    }}>
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative">
                                            {/* Animated circles */}
                                            <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping opacity-30"></div>
                                            <div className="absolute inset-2 rounded-full border-4 border-blue-300 animate-pulse"></div>
                                            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                                <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-white drop-shadow-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating elements */}
                                    <div className={`slide-in-right stagger-1 absolute -top-2 -right-2 glass-light rounded-lg px-2 py-1 text-xs font-medium text-blue-700 shadow-lg animate-bounce ${
                                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-200/50'
                                    }`}>
                                        Free Demo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;