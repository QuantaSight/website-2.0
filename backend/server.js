const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3001', 'http://localhost:3000'], // React dev servers
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Database connection
const connectDB = require('./config/database');
connectDB();

// Routes
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/demo-requests', require('./routes/demoRequests'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'QuantaSight API is running!',
        timestamp: new Date().toISOString(),
        endpoints: {
            blogs: '/api/blogs',
            demoRequests: '/api/demo-requests'
        }
    });
});

// API info endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'QuantaSight Website API',
        version: '1.0.0',
        description: 'Public API for website functionality',
        endpoints: {
            health: '/api/health',
            blogs: {
                list: 'GET /api/blogs',
                byId: 'GET /api/blogs/:id',
                bySlug: 'GET /api/blogs/slug/:slug'
            },
            demoRequests: {
                create: 'POST /api/demo-requests',
                note: 'Management endpoints available for main platform integration'
            }
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err.stack);

    // Handle specific error types
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid JSON in request body'
        });
    }

    if (err.type === 'entity.too.large') {
        return res.status(413).json({
            status: 'error',
            message: 'Request body too large'
        });
    }

    res.status(500).json({
        status: 'error',
        message: process.env.NODE_ENV === 'production'
            ? 'Something went wrong!'
            : err.message
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `Route ${req.originalUrl} not found`,
        availableEndpoints: [
            '/api/health',
            '/api/blogs',
            '/api/demo-requests'
        ]
    });
});

app.listen(PORT, () => {
    console.log(`🚀 QuantaSight API running on port ${PORT}`);
    console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📖 Blogs: http://localhost:${PORT}/api/blogs`);
    console.log(`📝 Demo Requests: http://localhost:${PORT}/api/demo-requests`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});