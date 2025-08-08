import React from 'react';
import { FormInput, FormSelect, FormTextarea, FormCheckbox } from '../../common/FormElements';
import { FormButton } from '../../common/Button';
import { FileText } from 'lucide-react';

const DemoForm = ({ darkMode }) => {
    // Demo form options
    const interestOptions = [
        { value: 'xtract', label: 'Xtract - Scientific Research & Analysis' },
        { value: 'atlas', label: 'Atlas - Pharmacovigilance Monitoring' },
        { value: 'workroom', label: 'Workroom - Collaboration & Content Creation' },
        { value: 'crm', label: 'AI CRM - Client Management' },
        { value: 'full', label: 'Full Platform Demo' }
    ];

    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50/50'}`}>
            <div className="max-w-7l mx-auto px-40">
                {/* Section Header */}
                <div className="text-center mb-16">
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
                    <div className={`professional-card p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                        darkMode
                            ? 'glass-dark shadow-gray-900/25'
                            : 'glass-card shadow-blue-100/60'
                    }`} style={{
                        boxShadow: darkMode
                            ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                    }}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    darkMode={darkMode}
                                />
                                <FormInput
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    darkMode={darkMode}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email address"
                                    darkMode={darkMode}
                                />
                                <FormInput
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    darkMode={darkMode}
                                />
                            </div>

                            <FormInput
                                label="Company Name"
                                placeholder="Enter your company name"
                                darkMode={darkMode}
                            />

                            <FormInput
                                label="Job Title"
                                placeholder="Enter your job title"
                                darkMode={darkMode}
                            />

                            <FormSelect
                                label="What are you most interested in?"
                                options={interestOptions}
                                darkMode={darkMode}
                            />

                            <FormTextarea
                                label="Additional Comments"
                                placeholder="Tell us about your specific needs or questions"
                                rows={4}
                                darkMode={darkMode}
                            />

                            <FormCheckbox
                                label="I agree to receive communications from QuantaSight. You can unsubscribe at any time. View our Privacy Policy."
                                darkMode={darkMode}
                            />

                            <div className="flex justify-center pt-4">
                                <FormButton text="Request Your Demo" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;