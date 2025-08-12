import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import BlogsHero from '../components/sections/blogs/BlogsHero';
import FeaturedBlog from '../components/sections/blogs/FeaturedBlog';
import BlogGrid from '../components/sections/blogs/BlogGrid';
import BlogDetail from '../components/sections/blogs/BlogDetail';

// API service
const blogAPI = {
    async getBlogs(page = 1, limit = 10) {
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/api/blogs?page=${page}&limit=${limit}&status=published`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    },

    async getBlogById(id) {
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching blog:', error);
            throw error;
        }
    },

    async getBlogBySlug(slug) {
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching blog by slug:', error);
            throw error;
        }
    }
};

// Helper function to transform backend data to frontend format
const transformBlogData = (blogData) => {
    return {
        ...blogData,
        excerpt: blogData.description,
        role: blogData.author_position,
        image: blogData.featured_image,
        date: new Date(blogData.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
};

const BlogsPage = () => {
    const { darkMode } = useTheme();
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [activeBlogId, setActiveBlogId] = useState(null);
    const [activeBlog, setActiveBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Initial load of blogs
    useEffect(() => {
        fetchInitialBlogs();
    }, []);

    // Fetch blog details when activeBlogId changes
    useEffect(() => {
        if (activeBlogId) {
            fetchBlogDetails(activeBlogId);
        } else {
            setActiveBlog(null);
        }
    }, [activeBlogId]);

    // Initial fetch (first page)
    const fetchInitialBlogs = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await blogAPI.getBlogs(1, 9); // Get first 9 blogs

            if (response.status === 'success') {
                const transformedBlogs = response.data.map(transformBlogData);

                // Set featured blog as the first/latest blog
                if (transformedBlogs.length > 0) {
                    setFeaturedBlog(transformedBlogs[0]);
                    // Set remaining blogs for grid (excluding featured)
                    setBlogs(transformedBlogs.slice(1));
                }

                setTotalPages(response.pagination.total_pages);
                setCurrentPage(1);
            } else {
                setError('Failed to fetch blogs');
            }
        } catch (err) {
            setError('Error loading blogs. Please try again later.');
            console.error('Error fetching blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    // Load more blogs (subsequent pages)
    const fetchMoreBlogs = async () => {
        try {
            setLoadingMore(true);
            setError(null);

            const nextPage = currentPage + 1;
            const response = await blogAPI.getBlogs(nextPage, 9);

            if (response.status === 'success') {
                const transformedBlogs = response.data.map(transformBlogData);

                // APPEND new blogs to existing ones (don't replace)
                setBlogs(prevBlogs => [...prevBlogs, ...transformedBlogs]);
                setCurrentPage(nextPage);
            } else {
                setError('Failed to load more blogs');
            }
        } catch (err) {
            setError('Error loading more blogs');
            console.error('Error fetching more blogs:', err);
        } finally {
            setLoadingMore(false);
        }
    };

    const fetchBlogDetails = async (blogId) => {
        try {
            const response = await blogAPI.getBlogById(blogId);

            if (response.status === 'success') {
                const transformedBlog = transformBlogData(response.data);
                setActiveBlog(transformedBlog);
            } else {
                setError('Blog not found');
            }
        } catch (err) {
            setError('Error loading blog details');
            console.error('Error fetching blog details:', err);
        }
    };

    const handleReadMore = (blogId) => {
        setActiveBlogId(blogId);
    };

    const handleBackToBlogs = () => {
        setActiveBlogId(null);
        setActiveBlog(null);
    };

    const handleLoadMore = () => {
        if (currentPage < totalPages && !loadingMore) {
            fetchMoreBlogs();
        }
    };

    // Loading state (initial load)
    if (loading && blogs.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p>Loading blogs...</p>
                </div>
            </div>
        );
    }

    // Error state (initial load)
    if (error && blogs.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className={`text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={fetchInitialBlogs}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {activeBlog ? (
                <BlogDetail
                    blog={activeBlog}
                    onBack={handleBackToBlogs}
                    darkMode={darkMode}
                />
            ) : (
                <>
                    <BlogsHero darkMode={darkMode} />
                    {featuredBlog && (
                        <FeaturedBlog
                            darkMode={darkMode}
                            blog={featuredBlog}
                            onReadMore={() => handleReadMore(featuredBlog._id)}
                        />
                    )}
                    <BlogGrid
                        darkMode={darkMode}
                        blogs={blogs}
                        onReadMore={handleReadMore}
                        onLoadMore={handleLoadMore}
                        hasMore={currentPage < totalPages}
                        loading={loadingMore}
                        error={error && blogs.length > 0 ? error : null}
                    />
                </>
            )}
        </div>
    );
};

export default BlogsPage;