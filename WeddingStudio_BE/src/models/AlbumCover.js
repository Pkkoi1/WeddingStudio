const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     AlbumCover:
 *       type: object
 *       required:
 *         - title
 *         - location
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *           description: Tiêu đề bìa album
 *         location:
 *           type: string
 *           description: ID địa điểm chụp
 *         coverImage:
 *           type: string
 *           description: Ảnh bìa đại diện
 *         description:
 *           type: string
 *           description: Mô tả về bộ sưu tập này
 *         albumCount:
 *           type: number
 *           description: Số lượng album trong bìa này
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

const albumCoverSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    albumCount: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index cho tìm kiếm
albumCoverSchema.index({ title: "text", description: "text" });
albumCoverSchema.index({ location: 1 });

// Virtual để lấy danh sách albums thuộc về bìa này
albumCoverSchema.virtual("albums", {
  ref: "Album",
  localField: "location",
  foreignField: "location",
});

module.exports = mongoose.model("AlbumCover", albumCoverSchema);
