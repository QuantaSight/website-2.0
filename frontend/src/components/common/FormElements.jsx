import React from 'react';

export const FormInput = ({ label, type, placeholder, darkMode }) => {
    return (
        <div className="relative">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
                type={type || "text"}
                className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/50 transition-all duration-200`}
                placeholder={placeholder}
            />
        </div>
    );
};

export const FormSelect = ({ label, options, darkMode }) => {
    return (
        <div className="relative">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <select
                className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/50 transition-all duration-200`}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export const FormTextarea = ({ label, placeholder, rows = 4, darkMode }) => {
    return (
        <div className="relative">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <textarea
                className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/50 transition-all duration-200`}
                rows={rows}
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export const FormCheckbox = ({ label, darkMode }) => {
    return (
        <div className="flex items-start">
            <input
                type="checkbox"
                className="mt-1 mr-2"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </span>
        </div>
    );
};

// Export a composed form group component
export const FormGroup = ({ children, className }) => {
    return (
        <div className={`space-y-6 ${className}`}>
            {children}
        </div>
    );
};