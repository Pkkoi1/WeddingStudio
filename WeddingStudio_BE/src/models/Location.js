const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Location:
 *       type: object
 *       required:
 *         - name
 *         - city
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *           description: Tên địa điểm chụp
 *         city:
 *           type: string
 *           description: Thành phố
 *         category:
 *           type: string
 *           enum: [outdoor, indoor, beach, mountain, urban, historical, garden, church, resort]
 *           description: Loại địa điểm
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Ảnh của địa điểm
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

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "outdoor",
        "indoor",
        "beach",
        "mountain",
        "urban",
        "historical",
        "garden",
        "church",
      ],
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index cho tìm kiếm địa điểm
locationSchema.index({ name: "text", city: "text" });
locationSchema.index({ city: 1, category: 1 });

module.exports = mongoose.model("Location", locationSchema);
