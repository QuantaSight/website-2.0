import React from 'react';
import { LogIn, Shield } from 'lucide-react';
import { FormInput, FormCheckbox } from '../../common/FormElements';
import { PrimaryButton } from '../../common/Button';
import logo from "../../../assets/images/qs_logo_small.png";
import qs_name_nobg from "../../../assets/images/qs_name_nobg.png";

const LoginForm = ({ darkMode }) => {
    return (
        <section className={`py-16 md:py-20 pt-10 md:pt-14 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`} style={{
            boxShadow: darkMode
                ? '0 8px 16px -4px rgba(0, 0, 0, 0.15)'
                : '0 8px 16px -4px rgba(59, 130, 246, 0.08)'
        }}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <LogIn className="w-3 h-3 mr-2" />
                        Secure Login
                    </div>
                    <h1 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Welcome Back
                    </h1>
                    <p className={`text-base max-w-md mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Sign in to access your QuantaSight platform
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <div className={`professional-card p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25'
                            : 'glass-card shadow-blue-100/60'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        {/* Logo Section */}
                        <div className="flex justify-center mb-8">
                            <div className={`p-4 rounded-xl shadow-lg transition-all duration-300 ${
                                darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                            }`}>
                                <div className="flex items-center space-x-3">
                                    <span className="h-8 w-8 flex items-center">
                                        <img src={logo} alt="Logo" className="h-full w-auto object-contain"/>
                                    </span>
                                    <span className="h-6 flex items-center">
                                        <img src={qs_name_nobg} alt="QuantaSight" className="h-full w-auto object-contain"/>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <FormInput
                                label="Email Address"
                                type="email"
                                placeholder="Enter your email address"
                                darkMode={darkMode}
                            />

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className={`block text-sm font-medium ${
                                        darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        Password
                                    </label>
                                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                        Forgot password?
                                    </a>
                                </div>
                                <FormInput
                                    type="password"
                                    placeholder="Enter your password"
                                    darkMode={darkMode}
                                />
                            </div>

                            <FormCheckbox
                                label="Remember me"
                                darkMode={darkMode}
                            />

                            <div className="pt-2">
                                <PrimaryButton fullWidth={true}>
                                    <LogIn className="w-4 h-4 mr-2" />
                                    Sign In
                                </PrimaryButton>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Don't have an account?{' '}
                            </span>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                Contact us for access
                            </a>
                        </div>

                        <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-center mb-4">
                                <div className={`p-2 rounded-lg ${
                                    darkMode ? 'bg-green-500/20' : 'bg-green-50'
                                }`}>
                                    <Shield className={`w-4 h-4 ${
                                        darkMode ? 'text-green-400' : 'text-green-600'
                                    }`} />
                                </div>
                            </div>
                            <div className={`text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <p>
                                    By signing in, you agree to our{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <div className={`professional-card p-4 transition-all duration-300 shadow-lg hover:shadow-xl ${
                            darkMode
                                ? 'glass-dark shadow-gray-900/25'
                                : 'glass-light shadow-blue-100/40'
                        }`}>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Need help?{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                    Contact our support team
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;