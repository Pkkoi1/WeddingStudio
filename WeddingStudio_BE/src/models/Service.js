const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *           description: Service name
 *         description:
 *           type: string
 *           description: Service description
 *         price:
 *           type: number
 *           description: Service price
 *         duration:
 *           type: number
 *           description: Service duration in hours
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Service images URLs
 *         features:
 *           type: array
 *           items:
 *             type: string
 *           description: Service features
 *         category:
 *           type: string
 *           enum: [wedding, prewedding, engagement, portrait]
 *         isActive:
 *           type: boolean
 *           default: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  duration: {
    type: Number,
    default: 2 // hours
  },
  images: [{
    type: String
  }],
  features: [{
    type: String
  }],
  category: {
    type: String,
    enum: ['wedding', 'prewedding', 'engagement', 'portrait'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);
