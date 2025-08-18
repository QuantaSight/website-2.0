import React from 'react';
import { Check, Upload, Users, MessageSquare, Building2, TrendingUp } from 'lucide-react';

const AiCrmFeatures = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-800/30' : 'bg-white/50 backdrop-blur-sm shadow-blue-100/50'
                    }`}>
                        <Users className="w-3 h-3 mr-2" />
                        CRM Capabilities
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Streamline your medical affairs relationships
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        AI CRM empowers medical teams to efficiently manage KOL relationships, track company interactions, and gain actionable insights from data
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Data Upload & Integration Card */}
                    <div className={`p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                        darkMode
                            ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                            }`}>
                                <Upload className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            <h3 className={`text-lg font-bold sm:ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Data Upload & Integration</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Smart sheet upload with automatic data parsing and validation</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI-powered data extraction from multiple file formats</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Seamless integration with existing CRM systems</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Real-time data synchronization and updates</span>
                            </li>
                        </ul>
                    </div>

                    {/* KOL Management Card */}
                    <div className={`p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                        darkMode
                            ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-green-500/20 shadow-green-500/20' : 'bg-green-50 shadow-green-200/30'
                            }`}>
                                <Users className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                            </div>
                            <h3 className={`text-lg font-bold sm:ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>KOL Management</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Comprehensive KOL profiles with expertise mapping</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interaction history tracking and relationship scoring</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated engagement recommendations and follow-ups</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Network visualization and influence mapping</span>
                            </li>
                        </ul>
                    </div>

                    {/* AI Chat Interface Card */}
                    <div className={`p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                        darkMode
                            ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                            }`}>
                                <MessageSquare className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                            </div>
                            <h3 className={`text-lg font-bold sm:ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>AI Chat Interface</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Natural language queries for complex medical science data</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Multi-modal conversations with data visualization</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Context-aware responses based on uploaded datasets</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Instant insights and trend analysis generation</span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Intelligence Card */}
                    <div className={`p-6 sm:p-8 h-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                        darkMode
                            ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                            <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                darkMode ? 'bg-indigo-500/20 shadow-indigo-500/20' : 'bg-indigo-50 shadow-indigo-200/30'
                            }`}>
                                <Building2 className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            </div>
                            <h3 className={`text-lg font-bold sm:ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Company Intelligence</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Competitive landscape analysis and market positioning</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Medical affairs project tracking and milestone monitoring</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Partnership opportunity identification and scoring</span>
                            </li>
                            <li className="flex items-start">
                                <Check size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Strategic decision support with predictive analytics</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiCrmFeatures;