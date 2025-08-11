import React from 'react';
import { BarChart, Filter, Calendar, Quote, User, ChevronRight } from 'lucide-react';

const AiCrmAnalytics = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
            <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-800/30' : 'bg-white/50 backdrop-blur-sm shadow-blue-100/50'
                    }`}>
                        <BarChart className="w-3 h-3 mr-2" />
                        Advanced Analytics
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Intelligent insights from your CRM data
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Transform raw relationship data into actionable insights with AI-powered analytics, smart filtering, and natural language queries
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Features */}
                    <div className="space-y-10">
                        {/* Smart Data Processing Card */}
                        <div className={`p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                            darkMode
                                ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                                }`}>
                                    <Filter className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Smart Data Processing</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Automatic data cleansing and standardization</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Duplicate detection and entity resolution</span>
                                </li>
                            </ul>
                        </div>

                        {/* Relationship Analytics Card */}
                        <div className={`p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                            darkMode
                                ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-green-500/20 shadow-green-500/20' : 'bg-green-50 shadow-green-200/30'
                                }`}>
                                    <Calendar className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Relationship Analytics</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Interaction frequency and engagement scoring</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Timeline visualization and trend analysis</span>
                                </li>
                            </ul>
                        </div>

                        {/* Natural Language Queries Card */}
                        <div className={`p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-xl ${
                            darkMode
                                ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                                }`}>
                                    <User className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Natural Language Queries</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Ask questions in plain English about your data</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Complex multi-dimensional analysis queries</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Query Examples */}
                    <div className="space-y-6">
                        {/* Query Examples Card */}
                        <div className={`p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl ${
                            darkMode
                                ? 'bg-gray-800/50 backdrop-blur-sm shadow-gray-900/25'
                                : 'bg-white/70 backdrop-blur-sm shadow-blue-100/60'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-4 sm:mb-0 ${
                                    darkMode ? 'bg-indigo-500/20 shadow-indigo-500/20' : 'bg-indigo-50 shadow-indigo-200/30'
                                }`}>
                                    <Quote className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                                </div>
                                <h3 className="text-lg font-bold sm:ml-4">Query Examples</h3>
                            </div>

                            <div className="space-y-6">
                                {/* KOL Analysis Example */}
                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # KOL Analysis
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        "Show me top 10 KOLs in oncology with<br />
                                        highest engagement scores this quarter"
                                    </div>
                                </div>

                                {/* Interaction Tracking Example */}
                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # Interaction Tracking
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        "List all medical affairs projects with<br />
                                        companies having &gt;5 interactions last month"
                                    </div>
                                </div>

                                {/* Relationship Insights Example */}
                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # Relationship Insights
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        "Analyze collaboration patterns between<br />
                                        pharma companies and academic institutions<br />
                                        in immunotherapy research"
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

export default AiCrmAnalytics;