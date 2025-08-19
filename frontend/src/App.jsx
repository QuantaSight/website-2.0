import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import XtractPage from './pages/XtractPage';
import AiCrmPage from './pages/AiCrmPage';
import AtlasPage from './pages/AtlasPage';
import WorkroomPage from './pages/WorkroomPage';
import BlogsPage from './pages/BlogsPage';
import DemoPage from './pages/DemoPage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import './styles/globals.css';
import './styles/animations.css';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/xtract" element={<XtractPage />} />
                        <Route path="/ai-crm" element={<AiCrmPage />} />
                        <Route path="/atlas" element={<AtlasPage />} />
                        <Route path="/workroom" element={<WorkroomPage />} />
                        <Route path="/blogs" element={<BlogsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ThemeProvider>
    );
};

export default App;