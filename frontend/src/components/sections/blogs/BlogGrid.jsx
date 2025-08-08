import React from 'react';
import { PrimaryButton } from '../../common/Button';
import { BlogCard } from '../../common/Cards';
import { Grid3X3 } from 'lucide-react';

const BlogGrid = ({ darkMode, blogs, onReadMore, onLoadMore, hasMore, loading }) => {
    return (
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="max-w-7l mx-auto px-40">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-3 py-1 glass-light rounded-full text-xs font-medium text-blue-700 mb-4 shadow-lg ${
                        darkMode ? 'shadow-gray-800/30' : 'shadow-blue-100/50'
                    }`}>
                        <Grid3X3 className="w-3 h-3 mr-2" />
                        Latest Articles
                    </div>
                    <h2 className={`text-2xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Recent Insights
                    </h2>
                    <p className={`text-base max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Explore our latest thoughts on AI, pharmaceutical innovation, and industry trends
                    </p>
                </div>

                {blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogs.map(blog => (
                                <BlogCard
                                    key={blog._id}
                                    {...blog}
                                    onReadMore={() => onReadMore(blog._id)}
                                    darkMode={darkMode}
                                />
                            ))}
                        </div>

                        {hasMore && (
                            <div className="flex justify-center">
                                <PrimaryButton
                                    onClick={onLoadMore}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Load More Articles'}
                                </PrimaryButton>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16">
                        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            No blogs available at the moment.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;
