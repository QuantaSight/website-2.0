import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import HeroAnimation from './HeroAnimation';

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
        <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center" style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>
            {/* Background Animation Layer */}
            <div className="absolute inset-0 z-0">
                <HeroAnimation darkMode={darkMode} />
            </div>

            {/* Subtle overlay for better text contrast */}
            <div className={`absolute inset-0 z-[1] pointer-events-none ${
                darkMode
                    ? 'bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/40'
                    : 'bg-gradient-to-b from-white/20 via-transparent to-blue-50/30'
            }`} />

            {/* Content Layer */}
            <div className="main-container relative z-10 py-12 md:py-16 lg:py-20 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <div className={`slide-up inline-flex items-center px-3 py-2 glass-light rounded-full text-xs font-medium text-blue-700 mb-6 shadow-lg pointer-events-auto ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse shadow-lg shadow-green-500/50"></div>
                        Trusted by Leading Pharmaceutical Companies
                    </div>

                    {/* Main Heading */}
                    <h1 className="slide-up stagger-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight pointer-events-none">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Next-Generation AI
                        </span>
                        <br />
                        <span className={`${darkMode ? 'text-white drop-shadow-lg' : 'text-gray-800 drop-shadow-md'}`}>
                            for Pharmaceutical & Life Sciences
                        </span>
                    </h1>

                    {/* Description */}
                    <p className={`slide-up stagger-2 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed pointer-events-none ${
                        darkMode ? 'text-gray-200 drop-shadow-md' : 'text-gray-700 drop-shadow-sm'
                    } max-w-3xl mx-auto`}>
                        Transform weeks of research into minutes with our AI-powered platform. Accelerate drug discovery, streamline regulatory processes, and enhance scientific collaboration.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;