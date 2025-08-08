import React from 'react';
import { ChevronRight } from 'lucide-react';
import SocialButton from './SocialButton';


export const TeamMember = ({ name, title, image, linkdin, twitter }) => {
    return (
        <div className="text-center group transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto relative">
                <img
                    src={image || "https://via.placeholder.com/200x200"}
                    alt={name}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
            <div className="mt-2 flex justify-center space-x-2">
                <SocialButton icon="linkedin" link={linkdin} />
                <SocialButton icon="twitter" link={twitter}/>
            </div>
        </div>
    );
};

export const BlogCard = ({ id, title, excerpt, image, author, role, date, onReadMore, darkMode }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${
            darkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200/50'
        }`}>
            <div className="relative">
                <img
                    src={image || "https://via.placeholder.com/400x250"}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {date}
                </div>
            </div>

            <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-200 ${
                    darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'
                }`}>
                    {title}
                </h3>

                <p className={`mb-4 line-clamp-3 text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    {excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-blue-600 flex items-center justify-center text-white font-medium shadow-sm">
                            {author.charAt(0)}
                        </div>
                        <div>
                            <div className={`font-medium text-sm ${
                                darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                {author}
                            </div>
                            <div className={`text-xs ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                {role}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => onReadMore(id)}
                        className={`font-medium transition-colors text-sm flex items-center ${
                            darkMode
                                ? 'text-blue-400 hover:text-blue-300'
                                : 'text-blue-600 hover:text-blue-800'
                        }`}
                        aria-label={`Read more about ${title}`}
                    >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};