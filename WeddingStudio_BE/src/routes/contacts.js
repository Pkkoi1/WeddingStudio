const express = require('express');
const { validateContact } = require('../middleware/validation');
const router = express.Router();

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Send contact message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message sent successfully
 */
router.post('/', validateContact, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Here you would typically save to database or send email
    // For now, we'll just return success response
    
    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        receivedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
