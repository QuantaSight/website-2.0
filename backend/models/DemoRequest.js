const mongoose = require('mongoose');

const demoRequestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    },
    phoneNumber: {
        type: String,
        trim: true,
        default: ''
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    interest: {
        type: String,
        required: true,
        enum: ['full', 'xtract', 'atlas', 'workroom', 'crm']
    },
    additionalComments: {
        type: String,
        trim: true,
        default: ''
    },
    agreeToReceiveCommunications: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    scheduled: {
        type: Date,
        default: null
    },
    notes: {
        type: String,
        trim: true,
        default: ''
    }
}, {
    timestamps: true, // This adds createdAt and updatedAt
    collection: 'request_demo' // Explicitly specify the collection name
});

// Add indexes for better query performance
demoRequestSchema.index({ email: 1 });
demoRequestSchema.index({ status: 1 });
demoRequestSchema.index({ createdAt: -1 });

// Virtual for full name
demoRequestSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

// Ensure virtual fields are serialized
demoRequestSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('DemoRequest', demoRequestSchema, 'request_demo');