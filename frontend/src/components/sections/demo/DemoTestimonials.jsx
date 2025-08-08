import React from 'react';
import Testimonial from '../../common/Testimonial';
import { MessageSquare } from 'lucide-react';

const DemoTestimonials = ({ darkMode }) => {
    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="max-w-7l mx-auto px-40">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <MessageSquare className="w-3 h-3 mr-2" />
                        Client Testimonials
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        What Our Clients Say
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Hear from teams who have transformed their workflow with QuantaSight
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className={`professional-card transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40 bg-gray-800'
                            : 'bg-white shadow-blue-100/60 hover:shadow-blue-200/70 border border-gray-200/50'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="p-6">
                            <div className="mb-6">
                                <svg className={`w-8 h-8 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                                <p className={`text-sm leading-relaxed italic mb-4 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    "The demo completely changed our perception of what AI could do for our medical affairs team. We went from skeptical to sold in 30 minutes."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    D
                                </div>
                                <div>
                                    <div className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Dr. James Patterson
                                    </div>
                                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Medical Director, Global Biopharma Inc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className={`professional-card transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40 bg-gray-800'
                            : 'bg-white shadow-blue-100/60 hover:shadow-blue-200/70 border border-gray-200/50'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="p-6">
                            <div className="mb-6">
                                <svg className={`w-8 h-8 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                                <p className={`text-sm leading-relaxed italic mb-4 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    "What impressed me most during the demo was how intuitive the platform is. Our team was able to start using it effectively with minimal training."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    L
                                </div>
                                <div>
                                    <div className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Linda Martinez
                                    </div>
                                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Head of Scientific Communications, Innovate Therapeutics
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className={`professional-card transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40 bg-gray-800'
                            : 'bg-white shadow-blue-100/60 hover:shadow-blue-200/70 border border-gray-200/50'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <div className="p-6">
                            <div className="mb-6">
                                <svg className={`w-8 h-8 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                                <p className={`text-sm leading-relaxed italic mb-4 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    "The ROI calculation the QuantaSight team provided during our demo made the business case clear. We've since seen a 70% reduction in research time."
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    M
                                </div>
                                <div>
                                    <div className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Michael Chang
                                    </div>
                                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        VP of Operations, MediScience Partners
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

export default DemoTestimonials;