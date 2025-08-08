import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Sun, Moon, Menu, X, ChevronDown, Brain,
    Home, Info, FileText, Phone, LogIn
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/images/qs_logo_small.png';
import qs_name_nobg from '../../assets/images/qs_name_nobg.png';

// Updated NavLink component - keeping original font colors
const NavLink = ({ title, icon, to, isButton }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/' && location.pathname === '/');

    return (
        <Link
            to={to}
            className={`
                flex items-center space-x-1 px-3 py-2 rounded-md transition-colors relative
                ${isButton
                ? 'bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium'
                : isActive
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }
            `}
        >
            {icon}
            <span className="text-sm">{title}</span>
            {isActive && !isButton && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></div>
            )}
        </Link>
    );
};

// Updated MobileNavLink component - keeping original font colors
const MobileNavLink = ({ title, icon, to, isButton, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/' && location.pathname === '/');

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
                flex items-center space-x-2 px-4 py-3 rounded-md transition-colors w-full relative text-sm
                ${isButton
                ? 'bg-blue-600 hover:bg-blue-700 text-white font-medium'
                : isActive
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }
            `}
        >
            {icon && icon}
            <span>{title}</span>
        </Link>
    );
};

// Updated DropdownItem component - keeping original font colors
const DropdownItem = ({ title, description, to, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
                w-full text-left px-4 py-3 transition-colors block
                ${isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 text-blue-600'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }
            `}
        >
            <div className={`font-medium text-sm ${isActive ? 'text-blue-600' : ''}`}>{title}</div>
            <div className={`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}>{description}</div>
        </Link>
    );
};

const Header = ({ activeSection }) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        modules: false
    });

    // Create ref for modules dropdown
    const modulesRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (menu) => {
        // Only handle modules dropdown now
        setDropdownOpen({
            modules: menu === 'modules' ? !dropdownOpen.modules : false
        });
    };

    const closeDropdowns = () => {
        setDropdownOpen({ modules: false });
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        closeDropdowns();
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close modules dropdown if click outside
            if (modulesRef.current && !modulesRef.current.contains(event.target)) {
                setDropdownOpen(prev => ({...prev, modules: false}));
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Check if modules section is active
    const location = useLocation();
    const isModulesActive = ['/xtract', '/atlas', '/workroom'].includes(location.pathname);

    return (
        <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="main-container">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="h-8 w-8 md:h-10 md:w-10 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                        </span>
                        <span className="h-6 md:h-8 flex items-center">
                            <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain" />
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        <NavLink
                            title="Home"
                            icon={<Home size={14} />}
                            to="/"
                        />
                        <NavLink
                            title="About"
                            icon={<Info size={14} />}
                            to="/about"
                        />

                        {/* Modules Dropdown */}
                        <div className="relative" ref={modulesRef}>
                            <button
                                className={`
                                    flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative text-sm
                                    ${isModulesActive ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : ''}
                                `}
                                onClick={() => toggleDropdown('modules')}
                            >
                                <span>Modules</span>
                                <ChevronDown size={14} className={`transition-transform ${dropdownOpen.modules ? 'rotate-180' : ''}`} />
                                {isModulesActive && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></div>
                                )}
                            </button>

                            {dropdownOpen.modules && (
                                <div className={`absolute left-0 mt-2 w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md shadow-lg z-10 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div className="py-2">
                                        <DropdownItem
                                            title="Xtract"
                                            description="Scientific research & AI summarization"
                                            to="/xtract"
                                            onClick={closeDropdowns}
                                        />
                                        <DropdownItem
                                            title="Atlas"
                                            description="Agentic AI query monitoring"
                                            to="/atlas"
                                            onClick={closeDropdowns}
                                        />
                                        <DropdownItem
                                            title="Workroom"
                                            description="Team collaboration & content sharing"
                                            to="/workroom"
                                            onClick={closeDropdowns}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink
                            title="Blogs"
                            icon={<FileText size={14} />}
                            to="/blogs"
                        />
                        <NavLink
                            title="Request Demo"
                            icon={<Phone size={14} />}
                            to="/demo"
                            isButton={true}
                        />
                        <NavLink
                            title="Login"
                            icon={<LogIn size={14} />}
                            to="/login"
                        />
                    </nav>

                    {/* Dark Mode Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`lg:hidden border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="main-container py-4">
                        <nav className="flex flex-col space-y-2">
                            <MobileNavLink
                                title="Home"
                                icon={<Home size={16} />}
                                to="/"
                                onClick={closeMobileMenu}
                            />
                            <MobileNavLink
                                title="About"
                                icon={<Info size={16} />}
                                to="/about"
                                onClick={closeMobileMenu}
                            />

                            {/* Mobile Modules Dropdown */}
                            <div>
                                <button
                                    className={`
                                        w-full flex items-center justify-between px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm
                                        ${isModulesActive ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600' : ''}
                                    `}
                                    onClick={() => toggleDropdown('modules')}
                                >
                                    <span className="font-medium">Modules</span>
                                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen.modules ? 'rotate-180' : ''}`} />
                                </button>

                                {dropdownOpen.modules && (
                                    <div className="pl-4 mt-2 space-y-1">
                                        <MobileNavLink
                                            title="Xtract"
                                            to="/xtract"
                                            onClick={closeMobileMenu}
                                        />
                                        <MobileNavLink
                                            title="Atlas"
                                            to="/atlas"
                                            onClick={closeMobileMenu}
                                        />
                                        <MobileNavLink
                                            title="Workroom"
                                            to="/workroom"
                                            onClick={closeMobileMenu}
                                        />
                                    </div>
                                )}
                            </div>

                            <MobileNavLink
                                title="Blogs"
                                icon={<FileText size={16} />}
                                to="/blogs"
                                onClick={closeMobileMenu}
                            />
                            <MobileNavLink
                                title="Request Demo"
                                icon={<Phone size={16} />}
                                to="/demo"
                                onClick={closeMobileMenu}
                                isButton={true}
                            />
                            <MobileNavLink
                                title="Login"
                                icon={<LogIn size={16} />}
                                to="/login"
                                onClick={closeMobileMenu}
                            />
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;