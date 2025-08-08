import React from 'react';
import { Link } from 'react-router-dom';

// Primary Button - Professional gradient design
export const PrimaryButton = ({ children, onClick, to, fullWidth = false, size = 'md' }) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const baseClasses = `${sizeClasses[size]} bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center ${
        fullWidth ? 'w-full' : ''
    }`;

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

// Secondary Button - Glassmorphism design
export const SecondaryButton = ({ children, onClick, to, darkMode, fullWidth = false, size = 'md' }) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const baseClasses = `${sizeClasses[size]} font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center ${
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

// Form Button - Professional form styling
export const FormButton = ({ text, type = "submit", to, fullWidth = false, disabled = false }) => {
    const baseClasses = `px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center ${
        fullWidth ? 'w-full' : ''
    }`;

    if (to && !disabled) {
        return (
            <Link to={to} className={baseClasses}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={baseClasses}
        >
            {text}
        </button>
    );
};

// Outline Button - Professional outline design
export const OutlineButton = ({ children, onClick, to, darkMode, fullWidth = false, size = 'md' }) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const baseClasses = `${sizeClasses[size]} font-medium rounded-lg border-2 transition-all duration-300 inline-flex items-center justify-center ${
        darkMode
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
            : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
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

// Icon Button - For actions with icons
export const IconButton = ({ children, onClick, icon, darkMode, size = 'md' }) => {
    const sizeClasses = {
        sm: 'p-2',
        md: 'p-2.5',
        lg: 'p-3'
    };

    const baseClasses = `${sizeClasses[size]} rounded-lg transition-all duration-300 inline-flex items-center justify-center ${
        darkMode
            ? 'glass-dark text-white hover:bg-gray-700/50'
            : 'glass-light text-gray-700 hover:bg-white/90'
    }`;

    return (
        <button onClick={onClick} className={baseClasses} title={children}>
            {icon}
        </button>
    );
};