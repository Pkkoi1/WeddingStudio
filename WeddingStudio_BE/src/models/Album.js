const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Album:
 *       type: object
 *       required:
 *         - title
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *           description: Album title
 *         description:
 *           type: string
 *           description: Album description
 *         coverImage:
 *           type: string
 *           description: Album cover image URL
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *               caption:
 *                 type: string
 *         category:
 *           type: string
 *           enum: [wedding, prewedding, engagement, portrait]
 *         location:
 *           type: string
 *           description: Location ID where photos were taken
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         isPublic:
 *           type: boolean
 *           default: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        caption: {
          type: String,
          trim: true,
        },
      },
    ],
    category: {
      type: String,
      enum: ["wedding", "prewedding", "engagement", "portrait"],
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Album", albumSchema);
