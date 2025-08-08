import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MainLayout = ({ children }) => {
    const { darkMode } = useTheme();
    const location = useLocation();
    useScrollAnimation();

    // Get current active section from pathname
    const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    return (
        <div className={`font-sans min-h-screen relative ${
            darkMode
                ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
                : 'bg-gradient-to-br from-blue-50/20 via-white to-indigo-50/30 text-gray-800'
        }`}>
            {/* Background pattern */}
            <div className="fixed inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <Header activeSection={activeSection} />

            <main className={`relative z-10 ${darkMode ? '' : 'text-gray-800'}`}>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;