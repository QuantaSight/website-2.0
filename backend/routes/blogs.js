const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// GET /api/blogs - Get all published blogs (READ ONLY)
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, search } = req.query;
        const query = { status: 'published' }; // Only show published blogs

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ];
        }

        const blogs = await Blog.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select('-__v'); // Exclude version field

        const total = await Blog.countDocuments(query);

        res.json({
            status: 'success',
            data: blogs,
            pagination: {
                current_page: parseInt(page),
                total_pages: Math.ceil(total / limit),
                total_items: total,
                items_per_page: parseInt(limit)
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET /api/blogs/:id - Get single blog by ID (READ ONLY)
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findOne({
            _id: req.params.id,
            status: 'published'
        }).select('-__v');

        if (!blog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }

        // Increment views (only change allowed)
        blog.views += 1;
        await blog.save();

        res.json({
            status: 'success',
            data: blog
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET /api/blogs/slug/:slug - Get blog by slug (READ ONLY)
router.get('/slug/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({
            slug: req.params.slug,
            status: 'published'
        }).select('-__v');

        if (!blog) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }

        // Increment views (only change allowed)
        blog.views += 1;
        await blog.save();

        res.json({
            status: 'success',
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;