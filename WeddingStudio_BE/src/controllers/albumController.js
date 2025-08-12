const Album = require("../models/Album");

const albumController = {
  // GET /api/albums
  getAllAlbums: async (req, res) => {
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
        isPublic = true,
        albumCover,
      } = req.body;

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
      } = req.body;

      const updateData = {};
      if (title !== undefined) updateData.title = title;
      if (description !== undefined) updateData.description = description;
      if (coverImage !== undefined) updateData.coverImage = coverImage;
      if (images !== undefined) updateData.images = images;
      if (category !== undefined) updateData.category = category;
      if (location !== undefined) updateData.location = location;
      if (tags !== undefined) updateData.tags = tags;
      if (isPublic !== undefined) updateData.isPublic = isPublic;
      if (albumCover !== undefined) updateData.albumCover = albumCover;

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
};

module.exports = albumController;
