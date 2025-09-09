import React from 'react';
import { Database, Users, Award } from 'lucide-react';
import { useTheme } from "../../../context/ThemeContext.jsx";

// Professional FeatureCard with enhanced glassmorphism and shadows
const FeatureCard = ({ title, subtitle, description, icon, index = 0 }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`scale-in stagger-${index} professional-card group hover:-translate-y-1 min-h-[260px] sm:min-h-[280px] flex flex-col transition-all duration-300 p-6 sm:p-8 ${
            darkMode
                ? 'glass-dark text-white shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30'
                : 'glass-card text-gray-800 shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/60'
        }`} style={{
            boxShadow: darkMode
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 10px 20px -10px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}>
            <div className="flex flex-col items-start text-left">
                <div className={`mb-6 p-3 sm:p-4 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                }`}>
                    {React.cloneElement(icon, {
                        className: `w-7 h-7 sm:w-8 sm:h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                    })}
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <h4 className={`text-sm font-medium mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                    {subtitle}
                </h4>
                <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

const Features = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="main-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`slide-up inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Database className="w-3 h-3 mr-2" />
                        Core Features
                    </div>
                    <h2 className={`slide-up stagger-1 text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Built for Scientific Excellence
                    </h2>
                    <p className={`slide-up stagger-2 text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Powerful features designed to accelerate pharmaceutical research and enhance collaboration across scientific teams
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <FeatureCard
                        title="AI-Powered Research"
                        subtitle="Accelerated Discovery"
                        description="Transform complex research tasks from weeks to minutes using advanced AI algorithms specifically trained for pharmaceutical and life sciences applications."
                        icon={<Database />}
                        index={0}
                    />

                    <FeatureCard
                        title="Seamless Collaboration"
                        subtitle="Enhanced Teamwork"
                        description="Enable effortless collaboration across departments with secure sharing, real-time editing, and comprehensive version control for all research materials."
                        icon={<Users />}
                        index={1}
                    />

                    <FeatureCard
                        title="Regulatory Compliance"
                        subtitle="FDA-Ready Documentation"
                        description="Ensure all research outputs meet regulatory standards with built-in compliance checks, audit trails, and professionally formatted documentation."
                        icon={<Award />}
                        index={2}
                    />
                </div>

                {/* Trust indicators */}
                <div className="slide-in-right stagger-3 mt-12 sm:mt-16 pt-8 border-t border-gray-200/50">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-lg text-gray-500">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-lg shadow-green-500/50"></div>
                            ISO 27001 Certified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;