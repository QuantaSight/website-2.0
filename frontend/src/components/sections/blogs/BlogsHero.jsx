import React from 'react';
import { FileText, TrendingUp } from 'lucide-react';

const BlogsHero = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-20 pt-10 md:pt-14 relative overflow-hidden ${
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

            <div className="max-w-7l mx-auto px-40">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Section badge */}
                    <div className={`inline-flex items-center px-4 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <FileText className="w-3 h-3 mr-2" />
                        Knowledge Hub
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            Insights & Updates
                        </span>
                    </h1>

                    <p className={`text-base md:text-lg mb-8 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    } max-w-2xl mx-auto`}>
                        Stay informed with the latest trends, research, and innovations in pharmaceutical and life sciences technology
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <div className={`p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <TrendingUp className="w-6 h-6 text-blue-600 mb-3 drop-shadow-sm mx-auto" />
                            <div className="text-sm font-medium mb-1">Weekly Updates</div>
                            <div className="text-xs text-gray-500">Fresh Content</div>
                        </div>
                        <div className={`p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <FileText className="w-6 h-6 text-green-600 mb-3 drop-shadow-sm mx-auto" />
                            <div className="text-sm font-medium mb-1">Expert Insights</div>
                            <div className="text-xs text-gray-500">Industry Leaders</div>
                        </div>
                        <div className={`p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <div className="w-6 h-6 bg-purple-600 rounded mx-auto mb-3 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">AI</span>
                            </div>
                            <div className="text-sm font-medium mb-1">AI & Tech Focus</div>
                            <div className="text-xs text-gray-500">Latest Innovations</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsHero;