import React from 'react';
import { Users, Zap, Shield, ArrowRight } from 'lucide-react';

const AiCrmHero = ({ darkMode }) => {
    return (
        <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>

            <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* Module badge */}
                        <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                            darkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-800/30' : 'bg-white/50 backdrop-blur-sm shadow-blue-100/50'
                        }`}>
                            <Users className="w-3 h-3 mr-2" />
                            AI CRM Module
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                AI CRM
                            </span>
                            <br />
                            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl sm:text-2xl lg:text-3xl`}>
                                Intelligent Relationship Management
                            </span>
                        </h1>

                        <p className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        } max-w-lg mx-auto lg:mx-0`}>
                            Integrate AI to track interactions with KOLs, companies, and medical affairs projects. Upload your data sheets and chat with intelligent insights for medical science queries.
                        </p>

                        {/* Enhanced Key benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className={`p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                                darkMode
                                    ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/20'
                                    : 'bg-white/50 backdrop-blur-sm shadow-blue-100/40'
                            }`}>
                                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-3 drop-shadow-sm mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Smart Upload</div>
                                <div className="text-xs text-gray-500">Data Integration</div>
                            </div>
                            <div className={`p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                                darkMode
                                    ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/20'
                                    : 'bg-white/50 backdrop-blur-sm shadow-blue-100/40'
                            }`}>
                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-3 drop-shadow-sm mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">KOL Tracking</div>
                                <div className="text-xs text-gray-500">Relationship Maps</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                                style={{
                                    boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
                                }}
                            >
                                Try AI CRM
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Enhanced Main demo container */}
                            <div className={`p-6 sm:p-8 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-xl ${
                                darkMode
                                    ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25'
                                    : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60'
                            }`} style={{
                                boxShadow: darkMode
                                    ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                            }}>
                                {/* Mock interface */}
                                <div className="space-y-4 sm:space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium">CRM Query</div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                                    </div>

                                    <div className={`p-3 sm:p-4 rounded-lg text-xs shadow-inner ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        "Show me top KOLs in oncology research with recent interactions"
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-xs">
                                            <div className="w-3 h-3 bg-blue-500 rounded mr-3 shadow-lg shadow-blue-500/50"></div>
                                            <span>Processing CRM data...</span>
                                        </div>
                                        <div className="flex items-center text-xs">
                                            <div className="w-3 h-3 bg-green-500 rounded mr-3 shadow-lg shadow-green-500/50"></div>
                                            <span>Analyzing KOL interactions...</span>
                                        </div>
                                        <div className="flex items-center text-xs">
                                            <div className="w-3 h-3 bg-purple-500 rounded mr-3 shadow-lg shadow-purple-500/50"></div>
                                            <span>Generating relationship insights...</span>
                                        </div>
                                    </div>

                                    <div className={`p-3 sm:p-4 rounded-lg shadow-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                                        <div className="text-xs font-medium text-blue-700 mb-2">Top KOL Insights</div>
                                        <div className="text-xs text-gray-600">Dr. Smith - 12 interactions this quarter, focus on immunotherapy...</div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Floating stats */}
                            <div className={`absolute -top-3 -right-3 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-green-700 shadow-xl ${
                                darkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-800/30' : 'bg-white/50 backdrop-blur-sm shadow-green-200/50'
                            }`}>
                                500+ KOLs
                            </div>

                            <div className={`absolute -bottom-3 -left-3 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-blue-700 shadow-xl ${
                                darkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-800/30' : 'bg-white/50 backdrop-blur-sm shadow-blue-200/50'
                            }`}>
                                Real-time Updates
                            </div>

                            {/* Enhanced Background elements */}
                            <div className="absolute -z-10 top-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -z-10 bottom-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiCrmHero;