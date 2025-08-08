// backend/models/Blog.js - Updated to match your existing data
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_position: {
        type: String,
        required: true
    },
    featured_image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'published'
    },
    slug: {
        type: String,
        unique: true
    },
    views: {
        type: Number,
        default: 0
    },
    reading_time: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true, // This adds createdAt and updatedAt
    collection: 'blog' // Explicitly specify the collection name
});

// Calculate reading time if content is modified
blogSchema.pre('save', function(next) {
    if (this.isModified('content')) {
        const wordsPerMinute = 200;
        const textContent = this.content.replace(/<[^>]*>/g, '');
        const wordCount = textContent.split(/\s+/).length;
        this.reading_time = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    }
    next();
});

// Use the exact collection name from your database
module.exports = mongoose.model('Blog', blogSchema, 'blog');