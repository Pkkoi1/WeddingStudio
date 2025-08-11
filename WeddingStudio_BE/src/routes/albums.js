const express = require("express");
const Album = require("../models/Album");
const { auth, adminAuth } = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * /api/albums:
 *   get:
 *     summary: Get all public albums
 *     tags: [Albums]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [wedding, prewedding, engagement, portrait]
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 12
 *     responses:
 *       200:
 *         description: List of albums
 */
router.get("/", async (req, res) => {
  try {
    const { category, page = 1, limit = 12 } = req.query;
    const query = { isPublic: true };

    if (category) {
      query.category = category;
    }

    const albums = await Album.find(query)
      .select("title description coverImage category location tags createdAt")
      .populate("location", "name city category")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Album.countDocuments(query);

    res.json({
      success: true,
      data: {
        albums,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

/**
 * @swagger
 * /api/albums/{id}:
 *   get:
 *     summary: Get album by ID
 *     tags: [Albums]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Album details with images
 *       404:
 *         description: Album not found
 */
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate(
      "location",
      "name address city category features"
    );

    if (!album || !album.isPublic) {
      return res.status(404).json({
        success: false,
        message: "Album not found",
      });
    }

    res.json({
      success: true,
      data: album,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

module.exports = router;
