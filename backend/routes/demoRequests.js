const express = require('express');
const router = express.Router();
const DemoRequest = require('../models/DemoRequest');

router.post('/', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            jobTitle,
            interest,
            additionalComments,
            agreeToReceiveCommunications
        } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !companyName || !jobTitle || !interest) {
            return res.status(400).json({
                status: 'error',
                message: 'All required fields must be filled'
            });
        }

        if (!agreeToReceiveCommunications) {
            return res.status(400).json({
                status: 'error',
                message: 'You must agree to receive communications to proceed'
            });
        }

        // Check if email already exists for pending/completed requests
        const existingRequest = await DemoRequest.findOne({
            email: email.toLowerCase(),
            status: { $in: ['pending', 'completed'] }
        });

        if (existingRequest) {
            return res.status(409).json({
                status: 'error',
                message: 'A demo request with this email already exists'
            });
        }

        // Create new demo request
        const demoRequest = new DemoRequest({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.toLowerCase().trim(),
            phoneNumber: phoneNumber?.trim() || '',
            companyName: companyName.trim(),
            jobTitle: jobTitle.trim(),
            interest,
            additionalComments: additionalComments?.trim() || '',
            agreeToReceiveCommunications,
            status: 'pending'
        });

        await demoRequest.save();

        res.status(201).json({
            status: 'success',
            message: 'Demo request submitted successfully',
            data: {
                id: demoRequest._id,
                email: demoRequest.email,
                status: demoRequest.status,
                createdAt: demoRequest.createdAt
            }
        });

    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors
            });
        }

        console.error('Demo request creation error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

// GET /api/demo-requests - Get all demo requests (for admin use)
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, status, search } = req.query;
        const query = {};

        // Filter by status if provided
        if (status && ['pending', 'completed', 'cancelled'].includes(status)) {
            query.status = status;
        }

        // Search functionality
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { companyName: { $regex: search, $options: 'i' } },
                { jobTitle: { $regex: search, $options: 'i' } }
            ];
        }

        const demoRequests = await DemoRequest.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select('-__v');

        const total = await DemoRequest.countDocuments(query);

        res.json({
            status: 'success',
            data: demoRequests,
            pagination: {
                current_page: parseInt(page),
                total_pages: Math.ceil(total / limit),
                total_items: total,
                items_per_page: parseInt(limit)
            }
        });

    } catch (error) {
        console.error('Demo requests fetch error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

// GET /api/demo-requests/:id - Get single demo request by ID
router.get('/:id', async (req, res) => {
    try {
        const demoRequest = await DemoRequest.findById(req.params.id).select('-__v');

        if (!demoRequest) {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }

        res.json({
            status: 'success',
            data: demoRequest
        });

    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }
        console.error('Demo request fetch error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

// PUT /api/demo-requests/:id - Update demo request (for admin use)
router.put('/:id', async (req, res) => {
    try {
        const { status, scheduled, notes } = req.body;
        const updateFields = {};

        if (status && ['pending', 'completed', 'cancelled'].includes(status)) {
            updateFields.status = status;
        }

        if (scheduled !== undefined) {
            updateFields.scheduled = scheduled ? new Date(scheduled) : null;
        }

        if (notes !== undefined) {
            updateFields.notes = notes.trim();
        }

        const demoRequest = await DemoRequest.findByIdAndUpdate(
            req.params.id,
            updateFields,
            { new: true, runValidators: true }
        ).select('-__v');

        if (!demoRequest) {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Demo request updated successfully',
            data: demoRequest
        });

    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }
        console.error('Demo request update error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

// DELETE /api/demo-requests/:id - Delete demo request (for admin use)
router.delete('/:id', async (req, res) => {
    try {
        const demoRequest = await DemoRequest.findByIdAndDelete(req.params.id);

        if (!demoRequest) {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Demo request deleted successfully'
        });

    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                status: 'error',
                message: 'Demo request not found'
            });
        }
        console.error('Demo request deletion error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

module.exports = router;