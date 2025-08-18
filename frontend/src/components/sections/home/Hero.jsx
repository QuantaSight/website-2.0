import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import logoImage from "../../../assets/images/img.png";

// Professional Button Components with Enhanced Glassmorphism
const PrimaryButton = ({ to, children, onClick, fullWidth = false }) => {
    const baseClasses = `px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to) {
        return (
            <Link to={to} className={baseClasses} style={{
                boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
            }}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses} style={{
            boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4), 0 4px 12px -4px rgba(59, 130, 246, 0.6)'
        }}>
            {children}
        </button>
    );
};

const SecondaryButton = ({ to, children, onClick, darkMode, fullWidth = false }) => {
    const baseClasses = `px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
        darkMode
            ? 'glass-dark text-white hover:bg-gray-700/50'
            : 'glass-light text-gray-700 hover:bg-white/90'
    } ${fullWidth ? 'w-full' : ''}`;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
};

const Hero = ({ darkMode }) => {
    return (
        <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'}`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>

            <div className="main-container">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className={`inline-flex items-center px-3 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg ${
                            darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                        }`}>
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse shadow-lg shadow-green-500/50"></div>
                            Trusted by Leading Pharmaceutical Companies
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Next-Generation AI
                            </span> <br />
                            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl sm:text-2xl lg:text-3xl`}>
                                for Pharmaceutical & Life Sciences
                            </span>
                        </h1>

                        <p className={`text-base lg:text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg mx-auto lg:mx-0`}>
                            Transform weeks of research into minutes with our AI-powered platform. Accelerate drug discovery, streamline regulatory processes, and enhance scientific collaboration.
                        </p>

                        {/*<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 justify-center lg:justify-start">*/}
                        {/*    <PrimaryButton to="/demo">*/}
                        {/*        Request Demo*/}
                        {/*    </PrimaryButton>*/}
                        {/*    <SecondaryButton to="/about" darkMode={darkMode}>*/}
                        {/*        Learn More*/}
                        {/*    </SecondaryButton>*/}
                        {/*</div>*/}

                        {/* Enhanced Stats */}
                    {/*    <div className={`flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t transition-all duration-300 ${*/}
                    {/*        darkMode ? 'border-gray-700/50' : 'border-gray-200/50'*/}
                    {/*    }`}>*/}
                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1 drop-shadow-sm">70%</div>*/}
                    {/*            <div className="text-xs text-gray-500">Time Saved</div>*/}
                    {/*        </div>*/}

                    {/*        <div className="text-center">*/}
                    {/*            <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1 drop-shadow-sm">ISO</div>*/}
                    {/*            <div className="text-xs text-gray-500">Certified</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Simple image container without background effects */}
                            <div className="w-full">
                                <img
                                    src={logoImage}
                                    alt="QuantaSight AI Platform"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;