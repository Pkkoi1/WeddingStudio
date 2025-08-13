const Album = require("../models/Album");
const AlbumCover = require("../models/AlbumCover");

const albumController = {
  // GET /api/albums
  getAllAlbums: async (req, res) => {
    try {
      const { category, albumCover, page = 1, limit = 12 } = req.query;
      const query = { isPublic: true };

      if (category) {
        query.category = category;
      }
      if (albumCover) {
        // Nếu albumCover là chuỗi ObjectId, convert sang ObjectId
        const mongoose = require("mongoose");
        try {
          query.albumCover = new mongoose.Types.ObjectId(albumCover);
        } catch (e) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid albumCover id" });
        }
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
            current: parseInt(page),
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
  },

  // GET /api/albums/:id
  getAlbumById: async (req, res) => {
    try {
      const album = await Album.findById(req.params.id).populate(
        "location",
        "name city category"
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
  },

  // POST /api/albums (Admin only)
  createAlbum: async (req, res) => {
    try {
      const {
        title,
        description,
        coverImage,
        images,
        category,
        location,
        tags,
        isPublic,
        albumCover,
        price,
      } = req.body;

      // Validate all required fields
      if (
        !title ||
        !description ||
        !coverImage ||
        !images ||
        !Array.isArray(images) ||
        images.length === 0 ||
        images.some((img) => !img.url || !img.caption) ||
        !category ||
        !location ||
        !tags ||
        !Array.isArray(tags) ||
        tags.length === 0 ||
        tags.some((tag) => typeof tag !== "string" || tag.trim() === "") ||
        isPublic === undefined ||
        price === undefined ||
        typeof price !== "number" ||
        price < 0 ||
        !albumCover
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing or invalid required fields. All fields are required and must be valid.",
        });
      }

      const albumData = {
        title,
        description,
        coverImage,
        images,
        category,
        location,
        tags,
        isPublic,
        albumCover,
        price,
      };

      const album = new Album(albumData);
      await album.save();
      await album.populate("location", "name city category");

      res.status(201).json({
        success: true,
        message: "Album created successfully",
        data: album,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // PUT /api/albums/:id (Admin only)
  updateAlbum: async (req, res) => {
    try {
      const {
        title,
        description,
        coverImage,
        images,
        category,
        location,
        tags,
        isPublic,
        albumCover,
        price,
      } = req.body;

      // Validate all required fields
      if (
        !title ||
        !description ||
        !coverImage ||
        !images ||
        !Array.isArray(images) ||
        images.length === 0 ||
        images.some((img) => !img.url || !img.caption) ||
        !category ||
        !location ||
        !tags ||
        !Array.isArray(tags) ||
        tags.length === 0 ||
        tags.some((tag) => typeof tag !== "string" || tag.trim() === "") ||
        isPublic === undefined ||
        price === undefined ||
        typeof price !== "number" ||
        price < 0 ||
        !albumCover
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing or invalid required fields. All fields are required and must be valid.",
        });
      }

      const updateData = {
        title,
        description,
        coverImage,
        images,
        category,
        location,
        tags,
        isPublic,
        albumCover,
        price,
      };

      const album = await Album.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true,
      }).populate("location", "name city category");

      if (!album) {
        return res.status(404).json({
          success: false,
          message: "Album not found",
        });
      }

      res.json({
        success: true,
        message: "Album updated successfully",
        data: album,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // DELETE /api/albums/:id (Admin only)
  deleteAlbum: async (req, res) => {
    try {
      const album = await Album.findByIdAndUpdate(
        req.params.id,
        { isPublic: false },
        { new: true }
      );

      if (!album) {
        return res.status(404).json({
          success: false,
          message: "Album not found",
        });
      }

      res.json({
        success: true,
        message: "Album deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // GET /api/albums/by-cover/:albumCover
  getAlbumsByCover: async (req, res) => {
    try {
      const mongoose = require("mongoose");
      let albumCoverId;
      try {
        albumCoverId = new mongoose.Types.ObjectId(req.params.albumCover);
      } catch (e) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid albumCover id" });
      }
      const albums = await Album.find({
        albumCover: albumCoverId,
        isPublic: true,
      }).populate("location", "name city category");
      res.json({ success: true, data: albums });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },
};

module.exports = albumController;
