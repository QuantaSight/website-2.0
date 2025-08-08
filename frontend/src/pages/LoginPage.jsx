import React from 'react';
import { useTheme } from '../context/ThemeContext';
import LoginForm from '../components/sections/login/LoginForm';

const LoginPage = () => {
    const { darkMode } = useTheme();

    return (
        <div>
            <LoginForm darkMode={darkMode} />
        </div>
    );
};

export default LoginPage;