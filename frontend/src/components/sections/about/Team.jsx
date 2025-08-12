import React, { useState } from 'react';
import { Users, MapPin, ExternalLink, User } from 'lucide-react';
import SocialButton from '../../common/SocialButton';
import founder from "../../../assets/images/Founder.png";
import cto from "../../../assets/images/cto.png";

// Enhanced TeamMember component with professional styling and icon fallback
const TeamMember = ({ name, title, image, linkdin, twitter, location, TeamLead, darkMode }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Check if we have a valid image URL (not placeholder)
    const hasValidImage = image &&
        !image.includes('placeholder') &&
        !image.includes('/api/placeholder') &&
        !imageError;

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(false);
    };

    return (
        <div className={`professional-card p-5 sm:p-6 text-center group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl`} style={{
            boxShadow: '0 8px 20px -6px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}>
            <div className="relative mb-6">
                <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 mx-auto relative shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {hasValidImage && imageLoaded ? (
                        <>
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </>
                    ) : (
                        // Fallback icon when no image is available
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 flex items-center justify-center transition duration-300 group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-700 dark:group-hover:to-blue-800">
                            <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 transition duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </div>
                    )}

                    {/* Hidden image for loading check if we have an image */}
                    {hasValidImage && !imageLoaded && (
                        <img
                            src={image}
                            alt={name}
                            className="hidden"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    )}
                </div>
                {/* Professional badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 glass-light rounded-full text-xs font-medium text-blue-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {TeamLead}
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <h3 className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>{title}</p>
                {location && (
                    <div className={`flex items-center justify-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                    </div>
                )}
            </div>

            <div className="flex justify-center space-x-3">
                <SocialButton icon="linkedin" link={linkdin} />
                <SocialButton icon="twitter" link={twitter} />
            </div>
        </div>
    );
};

const Team = ({ darkMode }) => {
    return (
        <section className={`py-16 lg:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
            <div className="main-container">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Users className="w-3 h-3 mr-2" />
                        Leadership Team
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Meet Our Leadership
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        A diverse group of experts in AI, healthcare, and pharmaceutical sciences leading the future of medical research
                    </p>
                </div>

                {/* Team Grid - Increased spacing between cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
                    <TeamMember
                        name="Dr. Sameer Trikha"
                        title="Founder & CEO"
                        image={founder}
                        location="London, UK"
                        linkdin="https://www.linkedin.com/in/sameer-trikha-1b987154/"
                        twitter="https://x.com/SameerTrikha"
                        TeamLead="Founder"
                        darkMode={darkMode}
                    />
                    <TeamMember
                        name="Ayush Mishra"
                        title="Chief Technology Officer"
                        image={cto}
                        location="Remote"
                        linkdin="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                        twitter="https://www.linkedin.com/in/ayush-mishra-b8882712b/"
                        TeamLead="CTO"
                        darkMode={darkMode}
                    />
                    <TeamMember
                        name="Bhargav Sri Sai"
                        title="Data Scientist"
                        image="/api/placeholder/200/200"
                        location="Remote"
                        linkdin="https://www.linkedin.com/in/bhargav-sri-sai-147331204/"
                        twitter="https://www.linkedin.com/in/bhargav-sri-sai-147331204/"
                        TeamLead="Data Scientist"
                        darkMode={darkMode}
                    />
                    <TeamMember
                        name="Kevin Patel"
                        title="Software Developer"
                        image="/api/placeholder/200/200"
                        location="Remote"
                        linkdin="https://www.linkedin.com/in/kevin222004/"
                        twitter="https://x.com/KevinPatel2004"
                        TeamLead="Software Developer"
                        darkMode={darkMode}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;