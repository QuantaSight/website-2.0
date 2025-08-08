import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import logo from "../../assets/images/qs_logo_small.png";
import qs_name_nobg from "../../assets/images/qs_name_nobg.png";

// Improved Footer Link Group Component
const FooterLinkGroup = ({ title, children }) => {
    const { darkMode } = useTheme();

    return (
        <div>
            <h3 className={`font-semibold mb-3 text-sm uppercase tracking-wider ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
                {title}
            </h3>
            <ul className="space-y-2">
                {children}
            </ul>
        </div>
    );
};

// Updated Footer Link Component with React Router
const FooterLink = ({ title, to }) => {
    const { darkMode } = useTheme();

    return (
        <li>
            <Link
                to={to}
                className={`text-sm transition-colors hover:underline ${
                    darkMode
                        ? 'text-gray-400 hover:text-blue-300'
                        : 'text-gray-600 hover:text-blue-600'
                }`}
            >
                {title}
            </Link>
        </li>
    );
};

const Footer = () => {
    const { darkMode } = useTheme();

    return (
        <footer className={`mt-12 py-8 ${
            darkMode
                ? 'glass-dark border-gray-700/50'
                : 'glass-light border-gray-200/50'
        } border-t backdrop-blur-xl`}>
            <div className="main-container">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                    <div className="text-center lg:text-left lg:max-w-sm">
                        <Link to="/" className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                            <span className="h-8 w-8 sm:h-10 sm:w-10 flex items-center">
                                <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
                            </span>
                            <span className="h-6 sm:h-8 flex items-center">
                                <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain"/>
                            </span>
                        </Link>
                        <p className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            Next-generation natural language solutions<br/>
                            for pharmaceutical and life sciences industries
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center lg:text-left">
                        <FooterLinkGroup title="Company">
                            <FooterLink title="About Us" to="/about"/>
                            <FooterLink title="Careers" to="/about"/>
                            <FooterLink title="Contact" to="/demo"/>
                            <FooterLink title="ISO Certification" to="/about"/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Products">
                            <FooterLink title="Xtract" to="/xtract"/>
                            <FooterLink title="Atlas" to="/atlas"/>
                            <FooterLink title="Workroom" to="/workroom"/>
                            <FooterLink title="CRM Dashboard" to="/demo"/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Resources">
                            <FooterLink title="Blog" to="/blogs"/>
                            <FooterLink title="Case Studies" to="/blogs"/>
                        </FooterLinkGroup>

                        <FooterLinkGroup title="Legal">
                            <FooterLink title="Privacy Policy" to="/about"/>
                        </FooterLinkGroup>
                    </div>
                </div>

                <div className={`mt-8 pt-6 border-t text-center text-sm ${
                    darkMode
                        ? 'border-gray-700 text-gray-400'
                        : 'border-gray-200 text-gray-600'
                }`}>
                    <p>© {new Date().getFullYear()} QuantaSight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;