import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Database, Users, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

// Professional ModuleCard with enhanced glassmorphism and shadows
const ModuleCard = ({ title, description, icon, to, badge }) => {
    const { darkMode } = useTheme();

    return (
        <Link
            to={to}
            className={`group block professional-card h-full min-h-[280px] sm:min-h-[320px] transition-all duration-300 hover:scale-105 ${
                darkMode
                    ? 'glass-dark text-white hover:bg-gray-700/50 shadow-xl shadow-gray-900/25 hover:shadow-2xl hover:shadow-gray-900/40'
                    : 'glass-card text-gray-800 hover:bg-white/90 shadow-xl shadow-blue-100/60 hover:shadow-2xl hover:shadow-blue-200/70'
            }`}
            style={{
                boxShadow: darkMode
                    ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
            }}
        >
            <div className="flex flex-col h-full p-5 sm:p-6">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg ${
                        darkMode ? 'bg-blue-500/20 shadow-blue-500/25' : 'bg-blue-50 shadow-blue-200/40'
                    }`}>
                        {React.cloneElement(icon, {
                            className: `w-7 h-7 sm:w-8 sm:h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                        })}
                    </div>
                    {badge && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full shadow-lg transition-all duration-300 ${
                            darkMode
                                ? 'bg-green-500/20 text-green-400 shadow-green-500/30'
                                : 'bg-green-100 text-green-700 shadow-green-200/50'
                        }`}>
                            {badge}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        {description}
                    </p>
                </div>

                {/* CTA */}
                <div className={`flex items-center justify-between pt-4 border-t transition-all duration-300 ${
                    darkMode ? 'border-gray-200/30' : 'border-gray-200/30'
                }`}>
                    <span className={`text-sm font-medium transition-colors ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                    } group-hover:text-blue-700`}>
                        Explore Module
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                    } group-hover:translate-x-1`} />
                </div>
            </div>
        </Link>
    );
};

const ModulesOverview = ({ darkMode }) => {
    return (
        <section className={`py-12 sm:py-16 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="main-container">
                <div className="text-center mb-10 sm:mb-12">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Database className="w-3 h-3 mr-2" />
                        AI-Powered Modules
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Comprehensive Research Suite
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Integrated modules designed to streamline every aspect of pharmaceutical research and development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    <ModuleCard
                        title="Xtract"
                        description="Advanced AI-powered extraction and analysis of scientific literature, clinical trials, patents, and regulatory guidelines with intelligent summarization capabilities."
                        icon={<FileText />}
                        to="/xtract"
                        badge="Core"
                    />

                    <ModuleCard
                        title="Atlas"
                        description="Intelligent pharmacovigilance monitoring with automated signal detection, post-market surveillance, and real-time safety analysis for comprehensive drug monitoring."
                        icon={<Database />}
                        to="/atlas"
                        badge="Advanced"
                    />

                    <ModuleCard
                        title="Workroom"
                        description="Collaborative workspace for teams with drag-and-drop content creation, multi-format document generation, and secure sharing for enhanced productivity."
                        icon={<Users />}
                        to="/workroom"
                        badge="Pro"
                    />
                </div>

                {/* Integration note */}
                <div className={`mt-10 sm:mt-12 p-5 sm:p-6 rounded-xl text-center transition-all duration-300 ${
                    darkMode
                        ? 'glass-dark shadow-xl shadow-gray-900/20'
                        : 'glass-light shadow-xl shadow-blue-100/40'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 8px 20px -6px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 8px 20px -6px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}>
                    <div className="flex items-center justify-center mb-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <FileText className="w-4 h-4 text-white" />
                            </div>
                            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                <Database className="w-4 h-4 text-white" />
                            </div>
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-sm font-medium mb-2">Seamless Integration</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        All modules work together seamlessly, sharing data and insights to provide a unified research experience
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ModulesOverview;