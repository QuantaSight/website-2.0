const express = require('express');
const router = express.Router();
const DemoRequest = require('../models/DemoRequest');
const nodemailer = require('nodemailer');

// Email configuration
const SUPPORT_EMAIL = "support@quantasight.com";
const SUPPORT_PASSWORD = "qxnf suue xxqn whcm";
const ADMIN_EMAILS = ["ayush@quantasight.com, sameer@quantasight.com"]; // Update with admin emails

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SUPPORT_EMAIL,
        pass: SUPPORT_PASSWORD
    }
});

// Helper function to get interest label
const getInterestLabel = (interestCode) => {
    const interestLabels = {
        'full': 'Full Platform Demo',
        'xtract': 'Xtract - Scientific Research & Analysis',
        'atlas': 'Atlas - Pharmacovigilance Monitoring',
        'workroom': 'Workroom - Collaboration & Content Creation',
        'crm': 'AI CRM - Client Management'
    };
    return interestLabels[interestCode] || interestCode;
};

// Send email function
const sendEmail = async (to, subject, htmlContent, fromName = "QuantaSight Team") => {
    try {
        const mailOptions = {
            from: `${fromName} <${SUPPORT_EMAIL}>`,
            to: to,
            subject: subject,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${to}`);
        return true;
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        return false;
    }
};

// Send user confirmation email
const sendUserConfirmationEmail = async (userData) => {
    try {
        const subject = `Thank you ${userData.firstName}! 🎉`;

        const htmlContent = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                    .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
                    .details-box { background: #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0; }
                    .detail-item { margin: 10px 0; }
                    .label { font-weight: bold; color: #374151; }
                    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; color: #6b7280; }
                    .emoji { font-size: 1.2em; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Thank you ${userData.firstName}! <span class="emoji">🎉</span></h1>
                    </div>
                    <div class="content">
                        <p>We've received your demo request for <strong>${getInterestLabel(userData.interest)}</strong>.</p>
                        <p>Our team will contact you within 24 hours to schedule your demonstration.</p>
                        
                        <div class="details-box">
                            <h3>Your Details:</h3>
                            <div class="detail-item">
                                <span class="label">Name:</span> ${userData.firstName} ${userData.lastName}
                            </div>
                            <div class="detail-item">
                                <span class="label">Company:</span> ${userData.companyName}
                            </div>
                            <div class="detail-item">
                                <span class="label">Job Title:</span> ${userData.jobTitle}
                            </div>
                            <div class="detail-item">
                                <span class="label">Interest:</span> ${getInterestLabel(userData.interest)}
                            </div>
                        </div>
                        
                        <div class="footer">
                            <p>Best regards,<br><strong>The QuantaSight Team</strong></p>
                            <p>If you have any questions, email us at <a href="mailto:support@quantasight.com">support@quantasight.com</a></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `;

        return await sendEmail(userData.email, subject, htmlContent);

    } catch (error) {
        console.error('Error sending user confirmation email:', error);
        return false;
    }
};

// Send admin notification email
const sendAdminNotificationEmail = async (userData) => {
    try {
        const subject = "📋 New Demo Request";

        // Format submission time
        const submittedTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }) + ' IST';

        const htmlContent = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #1a1a1a; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
                    .content { background: #2d2d2d; color: #e5e5e5; padding: 20px; border-radius: 0 0 10px 10px; }
                    .section { background: #3d3d3d; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6; }
                    .section.requirements { border-left-color: #10b981; }
                    .section.warning { border-left-color: #f59e0b; }
                    .section-title { color: #3b82f6; font-weight: bold; margin-bottom: 10px; }
                    .requirements .section-title { color: #10b981; }
                    .warning .section-title { color: #f59e0b; }
                    .detail-item { margin: 8px 0; }
                    .label { font-weight: bold; color: #9ca3af; }
                    .value { color: #e5e5e5; }
                    .not-provided { color: #6b7280; font-style: italic; }
                    .timestamp { background: #374151; padding: 10px; border-radius: 5px; font-family: monospace; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>📋 New Demo Request</h2>
                        <p style="margin: 0;">from</p>
                    </div>
                    <div class="content">
                        <div class="section">
                            <div class="section-title">👤 Contact Information</div>
                            <div class="detail-item">
                                <span class="label">Name:</span> 
                                <span class="value">${userData.firstName} ${userData.lastName}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Email:</span> 
                                <span class="value">${userData.email}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Phone:</span> 
                                <span class="value ${!userData.phoneNumber ? 'not-provided' : ''}">${userData.phoneNumber || 'Not provided'}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Company:</span> 
                                <span class="value">${userData.companyName}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Job Title:</span> 
                                <span class="value">${userData.jobTitle}</span>
                            </div>
                        </div>
                        
                        <div class="section requirements">
                            <div class="section-title">🎯 Demo Requirements</div>
                            <div class="detail-item">
                                <span class="label">Interest:</span> 
                                <span class="value">${getInterestLabel(userData.interest)}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Comments:</span> 
                                <span class="value ${!userData.additionalComments ? 'not-provided' : ''}">${userData.additionalComments || 'None provided'}</span>
                            </div>
                        </div>
                        
                        <div class="section warning">
                            <div class="section-title">📋 Privacy Policy</div>
                            <div class="detail-item">
                                <span class="label">Privacy Policy:</span> 
                                <span class="value">${userData.agreeToReceiveCommunications ? '✅ Agreed' : '❌ Not agreed'}</span>
                            </div>
                        </div>
                        
                        <div class="section">
                            <div class="section-title">⏰ Submission Details</div>
                            <div class="timestamp">
                                <strong>Submitted:</strong> ${submittedTime}
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px; padding: 15px; background: #374151; border-radius: 8px; text-align: center;">
                            <p style="margin: 0; color: #10b981;"><strong>Action Required:</strong> Schedule demo within 24 hours</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `;

        // Send to all admin emails
        let successCount = 0;
        for (const adminEmail of ADMIN_EMAILS) {
            if (await sendEmail(adminEmail, subject, htmlContent)) {
                successCount++;
            }
        }

        return successCount > 0;

    } catch (error) {
        console.error('Error sending admin notification email:', error);
        return false;
    }
};

// POST /demo-requests - Create a new demo request
router.post("/", async (req, res) => {
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
                "status": "error",
                "message": "All required fields must be filled"
            });
        }

        if (!agreeToReceiveCommunications) {
            return res.status(400).json({
                "status": "error",
                "message": "You must agree to receive communications to proceed"
            });
        }

        // Check if email already exists for pending/completed requests
        const existingRequest = await DemoRequest.findOne({
            email: email.toLowerCase(),
            status: { $in: ['pending', 'completed'] }
        });

        if (existingRequest) {
            return res.status(409).json({
                "status": "error",
                "message": "A demo request with this email already exists"
            });
        }

        // Create new demo request using Mongoose model
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

        // Save to database
        await demoRequest.save();

        // Send emails (don't let email failures prevent request creation)
        const emailResults = {
            userConfirmation: false,
            adminNotification: false
        };

        try {
            // Send confirmation email to user
            emailResults.userConfirmation = await sendUserConfirmationEmail(demoRequest);

            // Send notification email to admins
            emailResults.adminNotification = await sendAdminNotificationEmail(demoRequest);

        } catch (emailError) {
            console.error('Email sending failed:', emailError);
        }

        // Log email results
        if (emailResults.userConfirmation) {
            console.log(`Confirmation email sent to ${demoRequest.email}`);
        } else {
            console.warn(`Failed to send confirmation email to ${demoRequest.email}`);
        }

        if (emailResults.adminNotification) {
            console.log("Admin notification emails sent successfully");
        } else {
            console.warn("Failed to send admin notification emails");
        }

        const responseData = {
            "status": "success",
            "message": "Demo request submitted successfully",
            "data": {
                "id": demoRequest._id,
                "email": demoRequest.email,
                "status": demoRequest.status,
                "createdAt": demoRequest.createdAt
            }
        };

        // Add email status to response for debugging (optional)
        if (!emailResults.userConfirmation || !emailResults.adminNotification) {
            responseData.emailStatus = emailResults;
            responseData.message += " (Note: Some emails may not have been delivered)";
        }

        res.status(201).json(responseData);

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
            "status": "error",
            "message": "Internal server error"
        });
    }
});

module.exports = router;