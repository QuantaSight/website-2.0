import React from 'react';
import { HelpCircle, Clock, Users, MousePointer, DollarSign } from 'lucide-react';

const FAQ = ({ darkMode }) => {
    const faqs = [
        {
            icon: Clock,
            question: "How long does a typical demo last?",
            answer: "Our standard demo session lasts approximately 45-60 minutes. This includes a live demonstration of the platform tailored to your specific interests, plus time for questions and discussion."
        },
        {
            icon: Users,
            question: "Who should attend the demo from our company?",
            answer: "We recommend including stakeholders from Medical Affairs, Pharmacovigilance, and Scientific Communications teams, as well as any technical decision-makers who would be involved in the implementation process."
        },
        {
            icon: MousePointer,
            question: "Can we try the platform ourselves during the demo?",
            answer: "Yes! Our interactive demos include hands-on segments where you can experience the platform's capabilities firsthand. We encourage you to bring specific use cases or challenges that we can address during this portion."
        },
        {
            icon: DollarSign,
            question: "Is there a cost for the demo?",
            answer: "No, our product demonstrations are completely free of charge and come with no obligation to purchase. We're confident in the value our platform provides and want to show you how it can benefit your organization."
        }
    ];

    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50/50 to-white'}`}>
            <div className="max-w-7l mx-auto px-40">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <HelpCircle className="w-3 h-3 mr-2" />
                        Demo FAQ
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Frequently Asked Questions
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Everything you need to know about the demo process
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => {
                        const IconComponent = faq.icon;
                        return (
                            <div key={index} className={`professional-card p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                                darkMode
                                    ? 'glass-dark shadow-gray-900/25 hover:shadow-gray-900/40'
                                    : 'glass-card shadow-blue-100/60 hover:shadow-blue-200/70'
                            }`} style={{
                                boxShadow: darkMode
                                    ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                            }}>
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-xl shadow-lg transition-all duration-300 flex-shrink-0 ${
                                        darkMode ? 'bg-blue-500/20 shadow-blue-500/20' : 'bg-blue-50 shadow-blue-200/30'
                                    }`}>
                                        <IconComponent className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold mb-3 ${
                                            darkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {faq.question}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${
                                            darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;