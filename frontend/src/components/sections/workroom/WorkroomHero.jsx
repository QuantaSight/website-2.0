import React, { useState, useEffect } from 'react';
import { Users, Zap, Shield, ArrowRight, FileText, Edit3, Share2, Download, Eye, MessageCircle } from 'lucide-react';

// Professional Button Component
const PrimaryButton = ({ to, children, onClick, fullWidth = false }) => {
    const baseClasses = `inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 ${
        fullWidth ? 'w-full' : ''
    }`;

    return (
        <button onClick={onClick} className={baseClasses} style={{
            boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
        }}>
            {children}
        </button>
    );
};

const WorkroomHero = ({ darkMode }) => {
    const [activeUsers, setActiveUsers] = useState([
        { id: 1, name: 'Sarah M.', color: 'bg-blue-500', avatar: 'SM', isTyping: false },
        { id: 2, name: 'Dr. Chen', color: 'bg-green-500', avatar: 'DC', isTyping: true },
        { id: 3, name: 'Alex R.', color: 'bg-purple-500', avatar: 'AR', isTyping: false },
    ]);

    const [documentContent, setDocumentContent] = useState([
        "Clinical Trial Summary Report",
        "",
        "Study Overview: This Phase III randomized controlled trial evaluated the efficacy and safety of...",
        "",
        "Key Findings:",
        "• Primary endpoint achieved with statistical significance (p<0.001)",
        "• Safety profile consistent with previous studies",
        "• Notable improvement in quality of life measures"
    ]);

    const [currentlyTyping, setCurrentlyTyping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentlyTyping(prev => !prev);
            setActiveUsers(prev => prev.map(user => ({
                ...user,
                isTyping: user.id === 2 ? !user.isTyping : false
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>

            <div className="main-container">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* Module badge */}
                        <div className={`inline-flex items-center px-3 sm:px-4 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                            darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                        }`}>
                            <Users className="w-3 h-3 mr-2" />
                            Collaboration Module
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                QS Workroom
                            </span>
                            <br />
                            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl sm:text-2xl lg:text-3xl`}>
                                Collaborative Content Creation
                            </span>
                        </h1>

                        <p className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        } max-w-lg mx-auto lg:mx-0`}>
                            Collaborate seamlessly and create content efficiently. Drag and drop summaries to rapidly generate documents in multiple formats for various stakeholders.
                        </p>

                        {/* Key benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <Zap className="w-5 h-5 text-blue-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Real-Time</div>
                                <div className="text-xs text-gray-500">Collaboration</div>
                            </div>
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <Shield className="w-5 h-5 text-green-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Secure</div>
                                <div className="text-xs text-gray-500">Sharing</div>
                            </div>
                            <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg ${
                                darkMode ? 'glass-dark shadow-gray-900/20' : 'glass-light shadow-blue-100/40'
                            }`}>
                                <Users className="w-5 h-5 text-purple-600 mb-2 mx-auto lg:mx-0" />
                                <div className="text-sm font-medium mb-1">Multi-Format</div>
                                <div className="text-xs text-gray-500">Documents</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <PrimaryButton onClick={() => alert('Demo coming soon!')}>
                                Try Workroom
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Interactive Document Editor */}
                            <div className={`professional-card p-1 transform hover:scale-105 transition-transform duration-500 shadow-xl ${
                                darkMode
                                    ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                                    : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                            }`} style={{
                                boxShadow: darkMode
                                    ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                            }}>

                                {/* Document Header */}
                                <div className={`flex items-center justify-between p-3 border-b ${
                                    darkMode ? 'border-gray-700' : 'border-gray-200'
                                }`}>
                                    <div className="flex items-center space-x-2">
                                        <FileText className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm font-medium">Clinical_Report_v3.docx</span>
                                    </div>

                                </div>

                                {/* Collaboration Bar */}


                                {/* Document Content */}
                                <div className={`p-4 h-48 overflow-hidden ${
                                    darkMode ? 'bg-gray-800' : 'bg-white'
                                }`}>
                                    <div className="space-y-2">
                                        {documentContent.map((line, index) => (
                                            <div key={index} className="relative">
                                                {index === 0 ? (
                                                    <h3 className="font-bold text-sm text-blue-600">{line}</h3>
                                                ) : line === "" ? (
                                                    <div className="h-3"></div>
                                                ) : (
                                                    <p className="text-xs text-gray-600 leading-relaxed">{line}</p>
                                                )}

                                                {/* Editing indicators */}
                                                {index === 2 && currentlyTyping && (
                                                    <div className="absolute -left-2 top-0 w-1 h-4 bg-green-500 rounded animate-pulse"></div>
                                                )}
                                            </div>
                                        ))}

                                        {/* Typing indicator */}
                                        {currentlyTyping && (
                                            <div className="flex items-center space-x-1 text-xs text-green-600">
                                                <div className="flex space-x-1">
                                                    <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
                                                    <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-100"></div>
                                                    <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce delay-200"></div>
                                                </div>
                                                <span>Dr. Chen is typing...</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Format Options */}
                                <div className={`flex items-center justify-between p-3 border-t ${
                                    darkMode ? 'border-gray-700' : 'border-gray-200'
                                }`}>
                                    <div className="flex space-x-2">
                                        <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                                            PDF
                                        </button>
                                        <button className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                                            DOCX
                                        </button>
                                        <button className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
                                            Slides
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MessageCircle className="w-3 h-3 text-gray-400" />
                                        <span className="text-xs text-gray-500">5 comments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className={`absolute -top-3 -right-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-green-700 shadow-lg ${
                                darkMode ? 'shadow-gray-800/30' : 'shadow-green-200/50'
                            }`}>
                                Live Editing
                            </div>

                            <div className={`absolute -bottom-3 -left-3 glass-light rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-blue-700 shadow-lg ${
                                darkMode ? 'shadow-gray-800/30' : 'shadow-blue-200/50'
                            }`}>
                                Save
                            </div>

                            {/* Background elements */}
                            <div className="absolute -z-10 top-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -z-10 bottom-10 left-10 w-20 sm:w-24 h-20 sm:h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkroomHero;