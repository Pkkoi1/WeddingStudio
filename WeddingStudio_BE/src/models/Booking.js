const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - customerName
 *         - customerEmail
 *         - customerPhone
 *         - service
 *         - eventDate
 *       properties:
 *         _id:
 *           type: string
 *         customerName:
 *           type: string
 *           description: Customer full name
 *         customerEmail:
 *           type: string
 *           format: email
 *         customerPhone:
 *           type: string
 *         service:
 *           type: string
 *           description: Service ID
 *         eventDate:
 *           type: string
 *           format: date-time
 *         eventLocation:
 *           type: string
 *         specialRequests:
 *           type: string
 *         status:
 *           type: string
 *           enum: [pending, confirmed, completed, cancelled]
 *           default: pending
 *         totalAmount:
 *           type: number
 *         depositAmount:
 *           type: number
 *         notes:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  customerEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventLocation: {
    type: String,
    trim: true
  },
  specialRequests: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    min: 0
  },
  depositAmount: {
    type: Number,
    min: 0
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
