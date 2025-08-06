const express = require('express');
const Booking = require('../models/Booking');
const Service = require('../models/Service');
const { auth, adminAuth } = require('../middleware/auth');
const { validateBooking } = require('../middleware/validation');
const router = express.Router();

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', validateBooking, async (req, res) => {
  try {
    const { service: serviceId, ...bookingData } = req.body;

    // Verify service exists
    const service = await Service.findById(serviceId);
    if (!service || !service.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Service not found or inactive'
      });
    }

    // Create booking
    const booking = new Booking({
      ...bookingData,
      service: serviceId,
      totalAmount: service.price
    });

    await booking.save();
    await booking.populate('service', 'name price category');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings (Admin only)
 *     tags: [Bookings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, confirmed, completed, cancelled]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get('/', auth, adminAuth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = {};
    
    if (status) {
      query.status = status;
    }

    const bookings = await Booking.find(query)
      .populate('service', 'name price category')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Booking.countDocuments(query);

    res.json({
      success: true,
      data: {
        bookings,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
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
