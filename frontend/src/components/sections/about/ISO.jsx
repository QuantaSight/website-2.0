import React from 'react';
import { Shield, Award, CheckCircle, Lock } from 'lucide-react';

const ISO = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Shield className="w-3 h-3 mr-2" />
                        Security & Compliance
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Industry-Leading Certifications
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        QuantaSight adheres to the highest standards of quality and security with enterprise-grade certifications
                    </p>
                </div>

                {/* Content without border box */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Icon Section */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className={`p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/40'
                            }`}>
                                <Shield className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mx-auto`} />
                            </div>
                            {/* Floating badges */}
                            <div className={`absolute -top-2 -right-2 p-2 rounded-full shadow-lg ${
                                darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                            }`}>
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className={`absolute -bottom-2 -left-2 p-2 rounded-full shadow-lg ${
                                darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
                            }`}>
                                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h3 className={`text-lg sm:text-xl font-bold mb-6 ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            Enterprise-Grade Security & Quality Standards
                        </h3>

                        <p className={`text-sm sm:text-base mb-8 leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            QuantaSight is committed to maintaining the highest standards of security, quality, and compliance. Our comprehensive certification portfolio ensures that your sensitive pharmaceutical data is protected with enterprise-grade protocols while meeting strict regulatory requirements for medical device software.
                        </p>

                        {/* Certification Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {/* ISO 27001 */}
                            <div className={`p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                                darkMode ? 'bg-gray-700/50 shadow-gray-900/20' : 'bg-white shadow-blue-100/30'
                            }`}>
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 shadow-lg ${
                                        darkMode ? 'bg-blue-500/20' : 'bg-blue-50'
                                    }`}>
                                        <div className="text-blue-600 font-bold text-sm sm:text-lg">ISO</div>
                                    </div>
                                    <div className={`font-bold mb-1 text-sm sm:text-base ${
                                        darkMode ? 'text-white' : 'text-gray-800'
                                    }`}>ISO 27001</div>
                                    <div className={`text-xs ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Information Security Management</div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Compliance */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            <div className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                                darkMode
                                    ? 'bg-blue-500/20 text-blue-400'
                                    : 'bg-blue-100 text-blue-700'
                            }`}>
                                HIPAA Compliant
                            </div>
                            <div className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                                darkMode
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-green-100 text-green-700'
                            }`}>
                                GDPR Ready
                            </div>
                            <div className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                                darkMode
                                    ? 'bg-purple-500/20 text-purple-400'
                                    : 'bg-purple-100 text-purple-700'
                            }`}>
                                FDA Validated
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO;