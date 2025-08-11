const AlbumCover = require("../models/AlbumCover");
const Album = require("../models/Album");

const albumCoverController = {
  // GET /api/album-covers
  getAllAlbumCovers: async (req, res) => {
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

  // GET /api/album-covers/:id
  getAlbumCoverById: async (req, res) => {
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
  },

  // POST /api/album-covers
  createAlbumCover: async (req, res) => {
    try {
      const {
        title,
        location,
        coverImage,
        description,
        isActive = true,
      } = req.body;

      const albumCoverData = {
        title,
        location,
        coverImage,
        description,
        isActive,
        albumCount: 0, // Khởi tạo với 0 albums
      };

      const albumCover = new AlbumCover(albumCoverData);
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
  },

  // PUT /api/album-covers/:id
  updateAlbumCover: async (req, res) => {
    try {
      const { title, location, coverImage, description, isActive } = req.body;

      const updateData = {};
      if (title !== undefined) updateData.title = title;
      if (location !== undefined) updateData.location = location;
      if (coverImage !== undefined) updateData.coverImage = coverImage;
      if (description !== undefined) updateData.description = description;
      if (isActive !== undefined) updateData.isActive = isActive;

      const albumCover = await AlbumCover.findByIdAndUpdate(
        req.params.id,
        updateData,
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
  },

  // DELETE /api/album-covers/:id
  deleteAlbumCover: async (req, res) => {
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
  },
};

module.exports = albumCoverController;
