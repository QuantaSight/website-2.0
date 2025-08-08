import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavLink = ({ title, icon, to, isButton }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/' && location.pathname === '/');

    return (
        <Link
            to={to}
            className={`
                flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
                ${isButton ? 'bg-blue-600 hover:bg-blue-700 text-white' : isActive ? 'text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
            `}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
};

export const MobileNavLink = ({ title, icon, to, isButton, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`
            flex items-center space-x-2 px-4 py-2 rounded-md transition-colors w-full
            ${isButton ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
        `}
    >
        {icon && icon}
        <span>{title}</span>
    </Link>
);

export const DropdownItem = ({ title, description, to, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors block"
    >
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
    </Link>
);

export const FooterLinkGroup = ({ title, children }) => (
    <div>
        <h3 className="font-medium mb-2">{title}</h3>
        <ul className="space-y-1">{children}</ul>
    </div>
);

export const FooterLink = ({ title, to }) => (
    <li>
        <Link
            to={to}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
        >
            {title}
        </Link>
    </li>
);

export default NavLink;