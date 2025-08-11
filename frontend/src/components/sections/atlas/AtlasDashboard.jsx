import React from 'react';
import { ChevronRight, BarChart3, FileText, Shield, Clock } from 'lucide-react';

const AtlasDashboard = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="main-container">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <BarChart3 className="w-3 h-3 mr-2" />
                        Dashboard Interface
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Comprehensive Dashboard
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Our intuitive dashboard provides a central hub for monitoring all pharmacovigilance activities. Track signal trends, manage case assessments, and generate regulatory reports with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 sm:mb-12">
                    {/* Features List */}
                    <div className={`professional-card p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                            : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <h3 className="text-lg font-semibold mb-6">Key Dashboard Features</h3>
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className={`p-2 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 ${
                                    darkMode ? 'bg-blue-500/20' : 'bg-blue-50'
                                }`}>
                                    <ChevronRight size={16} className="text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium mb-2">Trend Visualization</div>
                                    <div className={`text-sm leading-relaxed ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        Interactive charts and graphs displaying safety signal trends over time with advanced filtering and drill-down capabilities
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className={`p-2 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 ${
                                    darkMode ? 'bg-green-500/20' : 'bg-green-50'
                                }`}>
                                    <ChevronRight size={16} className="text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium mb-2">Case Management</div>
                                    <div className={`text-sm leading-relaxed ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        Streamlined workflow for reviewing and assessing individual safety cases with automated prioritization and assignment
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className={`p-2 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 ${
                                    darkMode ? 'bg-purple-500/20' : 'bg-purple-50'
                                }`}>
                                    <ChevronRight size={16} className="text-purple-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium mb-2">Regulatory Reporting</div>
                                    <div className={`text-sm leading-relaxed ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        Automated generation of reports for regulatory submissions with customizable templates and approval workflows
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className={`p-2 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110 ${
                                    darkMode ? 'bg-amber-500/20' : 'bg-amber-50'
                                }`}>
                                    <ChevronRight size={16} className="text-amber-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium mb-2">Risk Mitigation Planning</div>
                                    <div className={`text-sm leading-relaxed ${
                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        Tools for developing and tracking risk management strategies with integrated action planning and monitoring
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Real-time Monitoring */}
                        <div className={`professional-card p-5 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-blue-500/20' : 'bg-blue-50'
                                }`}>
                                    <BarChart3 className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Real-time Analytics</h4>
                                    <div className="text-xs text-gray-500">Live data processing & insights</div>
                                </div>
                            </div>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Monitor safety signals as they emerge with real-time data processing and intelligent alerting systems.
                            </p>
                        </div>

                        {/* Report Generation */}
                        <div className={`professional-card p-5 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-green-500/20' : 'bg-green-50'
                                }`}>
                                    <FileText className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Automated Reports</h4>
                                    <div className="text-xs text-gray-500">FDA & EMA compliant documentation</div>
                                </div>
                            </div>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Generate regulatory-ready reports automatically with customizable templates and audit trails.
                            </p>
                        </div>

                        {/* Security & Compliance */}
                        <div className={`professional-card p-5 sm:p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/20'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                                <div className={`p-3 rounded-xl mr-0 sm:mr-4 mb-3 sm:mb-0 ${
                                    darkMode ? 'bg-purple-500/20' : 'bg-purple-50'
                                }`}>
                                    <Shield className={`w-5 h-5 sm:w-6 sm:h-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Enterprise Security</h4>
                                    <div className="text-xs text-gray-500">ISO 27001 & HIPAA compliant</div>
                                </div>
                            </div>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Bank-level security with role-based access controls and comprehensive audit logging.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dashboard Stats */}
                {/*<div className={`professional-card p-6 sm:p-8 text-center transition-all duration-300 shadow-lg hover:shadow-xl ${*/}
                {/*    darkMode*/}
                {/*        ? 'glass-dark shadow-gray-900/20'*/}
                {/*        : 'glass-light shadow-blue-100/40'*/}
                {/*}`}>*/}
                {/*    <h3 className="text-lg font-semibold mb-6">Dashboard Performance</h3>*/}
                {/*    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 drop-shadow-sm">350ms</div>*/}
                {/*            <div className="text-xs text-gray-500">Average Load Time</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1 drop-shadow-sm">99.9%</div>*/}
                {/*            <div className="text-xs text-gray-500">Uptime SLA</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 drop-shadow-sm">50+</div>*/}
                {/*            <div className="text-xs text-gray-500">Widget Types</div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1 drop-shadow-sm">Custom</div>*/}
                {/*            <div className="text-xs text-gray-500">Dashboards</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default AtlasDashboard;