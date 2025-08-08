import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import XtractPage from './pages/XtractPage';
import AtlasPage from './pages/AtlasPage';
import WorkroomPage from './pages/WorkroomPage';
import BlogsPage from './pages/BlogsPage';
import DemoPage from './pages/DemoPage';
import LoginPage from './pages/LoginPage';
import './styles/globals.css';
import './styles/animations.css';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/xtract" element={<XtractPage />} />
                        <Route path="/atlas" element={<AtlasPage />} />
                        <Route path="/workroom" element={<WorkroomPage />} />
                        <Route path="/blogs" element={<BlogsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        {/* Catch all route - redirect to home */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ThemeProvider>
    );
};

export default App;