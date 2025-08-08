import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import SocialButton from '../../common/SocialButton';

const BlogDetail = ({ blog, onBack, darkMode }) => {
    // Scroll to top when blog changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <p>Blog not found</p>
                </div>
            </div>
        );
    }

    return (
        <section className={`py-16 md:py-20 pt-24 md:pt-28 relative overflow-hidden ${
            darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/50 to-indigo-100/30'
        }`}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative">
                {/* Back button */}
                <button
                    onClick={onBack}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 mb-8 shadow-lg hover:shadow-xl ${
                        darkMode
                            ? 'glass-dark text-blue-400 hover:text-blue-300'
                            : 'glass-light text-blue-600 hover:text-blue-700'
                    }`}
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Blogs
                </button>

                {/* Main content card */}
                <div className={`professional-card p-8 transition-all duration-300 shadow-xl ${
                    darkMode
                        ? 'glass-dark shadow-gray-900/25'
                        : 'glass-card shadow-blue-100/60'
                }`} style={{
                    boxShadow: darkMode
                        ? '0 12px 28px -8px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 12px 28px -8px rgba(59, 130, 246, 0.18), 0 8px 24px -12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}>
                    {/* Blog header */}
                    <div className="mb-8">
                        <h1 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
                            darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            {blog.title}
                        </h1>

                        {/* Author section */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                                    {blog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className={`font-medium ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {blog.author}
                                    </div>
                                    <div className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {blog.role || blog.author_position}
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <Calendar className={`w-4 h-4 mr-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {blog.date}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className={`w-4 h-4 mr-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {blog.reading_time || 5} min read
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <User className={`w-4 h-4 mr-1 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {blog.views || 0} views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured image */}
                    {(blog.image || blog.featured_image) && (
                        <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                            <img
                                src={blog.image || blog.featured_image}
                                alt={blog.title}
                                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    )}

                    {/* Blog content */}
                    <div className={`prose prose-lg max-w-none ${
                        darkMode ? 'prose-invert' : ''
                    }`}>
                        <div
                            className={`text-base leading-relaxed ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>

                    {/* Share section */}
                    <div className={`mt-12 pt-8 border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Share2 className={`w-5 h-5 mr-3 ${
                                    darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`} />
                                <div className={`text-lg font-medium ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    Share this article
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <SocialButton icon="linkedin" link="#" darkMode={darkMode} />
                                <SocialButton icon="twitter" link="#" darkMode={darkMode} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;