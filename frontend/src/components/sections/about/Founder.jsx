import React from 'react';
import SocialButton from '../../common/SocialButton';
import { MapPin, Briefcase } from 'lucide-react';
import founder from "../../../assets/images/Founder.png";

const Founder = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                <div className={`professional-card p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                        : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="lg:w-1/3 flex justify-center">
                            <div className="relative group">
                                <div className={`rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto border-4 transition-all duration-300 shadow-xl group-hover:shadow-2xl ${
                                    darkMode
                                        ? 'border-gray-700 shadow-gray-900/30'
                                        : 'border-white shadow-blue-200/40'
                                }`}>
                                    <img
                                        src={founder}
                                        alt="Sameer Trikha"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                {/* Floating badge */}
                                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-full text-xs font-medium shadow-lg transition-all duration-300 ${
                                    darkMode
                                        ? 'glass-dark text-blue-400 shadow-gray-800/30'
                                        : 'glass-light text-blue-700 shadow-blue-200/50'
                                }`}>
                                    Founder & CEO
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 text-center lg:text-left">
                            <div className="mb-6">
                                <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    Dr. Sameer Trikha
                                </h2>

                                {/* Professional details */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4">
                                    <div className={`flex items-center text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                                        Ophthalmic Surgeon & Entrepreneur
                                    </div>
                                    <div className={`flex items-center text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                                        London, UK
                                    </div>
                                </div>
                            </div>

                            <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                QuantaSight was founded in 2022 by Sameer Trikha. Based in London, UK, Sameer is a practicing Ophthalmic Surgeon and entrepreneur, having previously founded and sold a computer vision AI company in the Ophthalmic space. Given the rapid advances in NLP technology, he recognised the need for applicable solutions for the healthcare industry. Sameer has built a 'remote first' team, harnessing the best talent from Asia and Europe to produce QuantaSight's Hercules platform.
                            </p>

                            {/* Enhanced social buttons */}
                            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                                <SocialButton
                                    icon="linkedin"
                                    link="https://www.linkedin.com/in/sameer-trikha-1b987154/"
                                />
                                <SocialButton
                                    icon="twitter"
                                    link="https://x.com/SameerTrikha"
                                />
                            </div>

                            {/* Achievement highlights */}
                            <div className="mt-6 pt-6 border-t border-gray-200/30">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className={`text-center p-4 rounded-lg transition-all duration-300 ${
                                        darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                                    }`}>
                                        <div className="text-lg font-bold text-blue-600 mb-1">2022</div>
                                        <div className="text-xs text-gray-500">Founded QuantaSight</div>
                                    </div>
                                    <div className={`text-center p-4 rounded-lg transition-all duration-300 ${
                                        darkMode ? 'bg-green-500/10' : 'bg-green-50'
                                    }`}>
                                        <div className="text-lg font-bold text-green-600 mb-1">AI Exit</div>
                                        <div className="text-xs text-gray-500">Previous Company</div>
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

export default Founder;