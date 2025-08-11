const express = require("express");
const AlbumCover = require("../models/AlbumCover");
const Album = require("../models/Album");
const { auth, adminAuth } = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * /api/album-covers:
 *   get:
 *     summary: Get all album covers (bìa albums)
 *     tags: [Album Covers]
 *     parameters:
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
 *         description: List of album covers with location info
 */
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 12 } = req.query;

    const albumCovers = await AlbumCover.find({ isActive: true })
      .populate("location", "name city category")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await AlbumCover.countDocuments({ isActive: true });

    res.json({
      success: true,
      data: {
        albumCovers,
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
 * /api/album-covers/{id}:
 *   get:
 *     summary: Get album cover with all albums at that location
 *     tags: [Album Covers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Album cover details with all albums at that location
 *       404:
 *         description: Album cover not found
 */
router.get("/:id", async (req, res) => {
  try {
    const albumCover = await AlbumCover.findById(req.params.id).populate(
      "location",
      "name city category"
    );

    if (!albumCover || !albumCover.isActive) {
      return res.status(404).json({
        success: false,
        message: "Album cover not found",
      });
    }

    // Lấy tất cả albums tại địa điểm này
    const albums = await Album.find({
      location: albumCover.location._id,
      isPublic: true,
    }).select("title coverImage category tags createdAt");

    // Cập nhật số lượng album
    albumCover.albumCount = albums.length;
    await albumCover.save();

    res.json({
      success: true,
      data: {
        ...albumCover.toObject(),
        albums,
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
 * /api/album-covers:
 *   post:
 *     summary: Create new album cover (Admin only)
 *     tags: [Album Covers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlbumCover'
 *     responses:
 *       201:
 *         description: Album cover created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Admin access required
 */
router.post("/", auth, adminAuth, async (req, res) => {
  try {
    const albumCover = new AlbumCover(req.body);
    await albumCover.save();
    await albumCover.populate("location", "name city category");

    res.status(201).json({
      success: true,
      message: "Album cover created successfully",
      data: albumCover,
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
 * /api/album-covers/{id}:
 *   put:
 *     summary: Update album cover (Admin only)
 *     tags: [Album Covers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlbumCover'
 *     responses:
 *       200:
 *         description: Album cover updated successfully
 *       404:
 *         description: Album cover not found
 */
router.put("/:id", auth, adminAuth, async (req, res) => {
  try {
    const albumCover = await AlbumCover.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("location", "name city category");

    if (!albumCover) {
      return res.status(404).json({
        success: false,
        message: "Album cover not found",
      });
    }

    res.json({
      success: true,
      message: "Album cover updated successfully",
      data: albumCover,
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
 * /api/album-covers/{id}:
 *   delete:
 *     summary: Delete album cover (Admin only)
 *     tags: [Album Covers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Album cover deleted successfully
 *       404:
 *         description: Album cover not found
 */
router.delete("/:id", auth, adminAuth, async (req, res) => {
  try {
    const albumCover = await AlbumCover.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!albumCover) {
      return res.status(404).json({
        success: false,
        message: "Album cover not found",
      });
    }

    res.json({
      success: true,
      message: "Album cover deleted successfully",
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
