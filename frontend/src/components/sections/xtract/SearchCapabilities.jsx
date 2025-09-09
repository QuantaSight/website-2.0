import React from 'react';
import { Search, Filter, Calendar, Quote, User, ChevronRight } from 'lucide-react';

const SearchCapabilities = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
            <div className="main-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`slide-up inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Search className="w-3 h-3 mr-2" />
                        Advanced Search
                    </div>
                    <h2 className={`slide-up stagger-1 text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Precision search with powerful operators
                    </h2>
                    <p className={`slide-up stagger-2 text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Find exactly what you need with advanced Boolean operators, filtering, and field-specific searches across millions of documents
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-3">
                        <div className={`scale-in professional-card p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                            transitionDelay: '0s'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                                }`}>
                                    <Filter className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Boolean Operators</h3>
                            </div>
                            <ul className="space-y-1">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">AND, OR, NOT operators for precise queries</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Parentheses for complex logical grouping</span>
                                </li>
                            </ul>
                        </div>

                        <div className={`scale-in stagger-1 professional-card p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                            transitionDelay: '0.1s'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-green-500/20 shadow-green-500/20' : 'bg-green-50 shadow-green-200/30'
                                }`}>
                                    <Calendar className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Date & Year Filtering</h3>
                            </div>
                            <ul className="space-y-1">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Year range filtering: [2020 TO 2025]</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Specific date ranges and publication periods</span>
                                </li>
                            </ul>
                        </div>

                        <div className={`scale-in stagger-2 professional-card p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                                : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                        }`} style={{
                            boxShadow: darkMode
                                ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                            transitionDelay: '0.2s'
                        }}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-purple-500/20 shadow-purple-500/20' : 'bg-purple-50 shadow-purple-200/30'
                                }`}>
                                    <User className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                </div>
                                <h3 className="text-base font-bold sm:ml-3">Field-Specific Search</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Author, title, abstract, and keyword targeting</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight size={16} className="text-blue-600 mt-1 mr-3 flex-shrink-0 drop-shadow-sm" />
                                    <span className="text-sm leading-relaxed">Exact phrase matching with quotation marks</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className={`slide-in-right professional-card p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/25'
                                : 'glass-card shadow-blue-100/60'
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
                                <h3 className="text-lg font-bold sm:ml-4">Search Examples</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # Boolean Search
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        ("immuno-oncology" OR "cancer immunotherapy")<br />
                                        AND "PD-1 inhibitor" AND year:[2020 TO 2025]
                                    </div>
                                </div>

                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # Author + Subject Search
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        author:"Smith J" AND subject:"diabetes"<br />
                                        NOT "type 1"
                                    </div>
                                </div>

                                <div>
                                    <div className={`text-xs font-medium mb-2 ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        # Complex Query
                                    </div>
                                    <div className={`p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm shadow-inner overflow-x-auto ${
                                        darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-900 text-green-400'
                                    }`}>
                                        title:"machine learning" AND<br />
                                        (abstract:"neural network" OR abstract:"AI")<br />
                                        AND year:[2023 TO 2025]
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

export default SearchCapabilities;