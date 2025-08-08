import React from 'react';

const Testimonial = ({ quote, author, title, company }) => {
    return (
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
            <div className="mb-4 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                    <path d="M0 14.182l4.571-4.91h4.764v9.818h-9.335v-4.908zm14.665-4.91h4.765v9.818h-9.335v-4.908l4.57-4.91z" />
                </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{quote}"</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {author.charAt(0)}
                </div>
                <div className="ml-3">
                    <div className="font-bold">{author}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{title}, {company}</div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;