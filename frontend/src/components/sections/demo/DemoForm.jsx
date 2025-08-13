import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const DemoForm = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        jobTitle: '',
        interest: '',
        additionalComments: '',
        agreeToReceiveCommunications: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'companyName', 'jobTitle', 'interest'];
        const missingFields = requiredFields.filter(field => !formData[field].trim());

        if (missingFields.length > 0) {
            setSubmitMessage('Please fill in all required fields.');
            return;
        }

        if (!formData.agreeToReceiveCommunications) {
            setSubmitMessage('Please agree to receive communications to proceed.');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

            const response = await fetch(`${API_BASE_URL}/web-api/demo-requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitMessage('Thank you! Your demo request has been submitted successfully. We\'ll contact you within 24 hours.');
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    companyName: '',
                    jobTitle: '',
                    interest: '',
                    additionalComments: '',
                    agreeToReceiveCommunications: false
                });
            } else {
                setSubmitMessage(result.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
        darkMode
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
            : 'bg-white border-gray-300 text-gray-900'
    }`;

    const labelClass = `block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`;

    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
            <div className="main-container">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <FileText className="w-3 h-3 mr-2" />
                        Demo Request Form
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Get Started with Your Personalized Demo
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Fill out the form below and our team will contact you within 24 hours to schedule your demonstration
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className={`professional-card p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25'
                            : 'glass-card shadow-blue-100/60'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>First Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Last Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Company Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Job Title *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your job title"
                                    value={formData.jobTitle}
                                    onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>What are you most interested in? *</label>
                                <select
                                    value={formData.interest}
                                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                                    className={inputClass}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="full">Full Platform Demo</option>
                                    <option value="xtract">Xtract - Scientific Research & Analysis</option>
                                    <option value="atlas">Atlas - Pharmacovigilance Monitoring</option>
                                    <option value="workroom">Workroom - Collaboration & Content Creation</option>
                                    <option value="crm">AI CRM - Client Management</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClass}>Additional Comments</label>
                                <textarea
                                    placeholder="Tell us about your specific needs or questions"
                                    rows={4}
                                    value={formData.additionalComments}
                                    onChange={(e) => setFormData({...formData, additionalComments: e.target.value})}
                                    className={inputClass}
                                />
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    checked={formData.agreeToReceiveCommunications}
                                    onChange={(e) => setFormData({...formData, agreeToReceiveCommunications: e.target.checked})}
                                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="agree" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    I agree to receive communications from QuantaSight. You can unsubscribe at any time.{' '}
                                    <a
                                        href="/privacy"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View our Privacy Policy
                                    </a>
                                    . *
                                </label>
                            </div>

                            {submitMessage && (
                                <div className={`p-4 rounded-lg text-sm ${
                                    submitMessage.includes('successfully')
                                        ? 'bg-green-100 text-green-800 border border-green-200'
                                        : 'bg-red-100 text-red-800 border border-red-200'
                                }`}>
                                    {submitMessage}
                                </div>
                            )}

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        isSubmitting
                                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Request Your Demo"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;