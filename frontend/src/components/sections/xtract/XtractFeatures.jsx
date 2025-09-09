import React from 'react';
import { Check, FileText, Users, Beaker, Building2, Award } from 'lucide-react';

const XtractFeatures = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`slide-up inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <FileText className="w-3 h-3 mr-2" />
                        Research Capabilities
                    </div>
                    <h2 className={`slide-up stagger-1 text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        No more guesswork or hours of research
                    </h2>
                    <p className={`slide-up stagger-2 text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        QuantaSight's extraction feature empowers scientists to rapidly gather insights from various sources
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className={`scale-in professional-card p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                        transitionDelay: '0s'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                            }`}>
                                <FileText className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            <h3 className="text-lg font-bold sm:ml-4">Papers</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">All paper related details with advanced search capabilities</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">AI-powered summarization of complex scientific papers</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Critical evaluation of methodologies and results</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Discovery of similar papers and research trends</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`scale-in stagger-1 professional-card p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                        transitionDelay: '0.1s'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-green-500/20 shadow-green-500/20' : 'bg-green-50 shadow-green-200/30'
                            }`}>
                                <Award className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                            </div>
                            <h3 className="text-lg font-bold sm:ml-4">Patents</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">AI-powered analysis of patent</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Patent landscape mapping and competitor analysis</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Real-time patent status and expiration tracking</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`scale-in stagger-2 professional-card p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                        transitionDelay: '0.2s'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                            }`}>
                                <Beaker className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                            </div>
                            <h3 className="text-lg font-bold sm:ml-4">Guidelines & Clinical Trials</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Up-to-date access to treatment guidelines across specialties</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Comprehensive clinical trial information and status</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">AI summaries of complex protocol documents</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Competitive landscape analysis of ongoing trials</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`scale-in stagger-3 professional-card p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                        transitionDelay: '0.3s'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-indigo-500/20 shadow-indigo-500/20' : 'bg-indigo-50 shadow-indigo-200/30'
                            }`}>
                                <Building2 className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            </div>
                            <h3 className="text-lg font-bold sm:ml-4">Company Information</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">KOL relationships and collaboration networks</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Drug development pipeline and competitive analysis</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Research focus areas and emerging interests</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className="text-sm leading-relaxed">Strategic partnership and investment activities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default XtractFeatures;