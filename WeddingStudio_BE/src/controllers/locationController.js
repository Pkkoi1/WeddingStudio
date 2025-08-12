const Location = require("../models/Location");

const locationController = {
  // GET /api/locations
  getAllLocations: async (req, res) => {
    try {
      const { city, category, page = 1, limit = 10 } = req.query;
      const query = { isActive: true };

      if (city) query.city = new RegExp(city, "i");
      if (category) query.category = category;

      const locations = await Location.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      const total = await Location.countDocuments(query);

      res.json({
        success: true,
        data: {
          locations,
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

  // GET /api/locations/:id
  getLocationById: async (req, res) => {
    try {
      const location = await Location.findById(req.params.id);

      if (!location || !location.isActive) {
        return res.status(404).json({
          success: false,
          message: "Location not found",
        });
      }

      res.json({
        success: true,
        data: location,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // POST /api/locations
  createLocation: async (req, res) => {
    try {
      const { name, city, category, images, isActive = true } = req.body;

      const locationData = {
        name,
        city,
        category,
        images,
        isActive,
      };

      const location = new Location(locationData);
      await location.save();

      res.status(201).json({
        success: true,
        message: "Location created successfully",
        data: location,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // PUT /api/locations/:id
  updateLocation: async (req, res) => {
    try {
      const { name, city, category, images, isActive } = req.body;

      const updateData = {};
      if (name !== undefined) updateData.name = name;
      if (city !== undefined) updateData.city = city;
      if (category !== undefined) updateData.category = category;
      if (images !== undefined) updateData.images = images;
      if (isActive !== undefined) updateData.isActive = isActive;

      const location = await Location.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!location) {
        return res.status(404).json({
          success: false,
          message: "Location not found",
        });
      }

      res.json({
        success: true,
        message: "Location updated successfully",
        data: location,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // DELETE /api/locations/:id
  deleteLocation: async (req, res) => {
    try {
      const location = await Location.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );

      if (!location) {
        return res.status(404).json({
          success: false,
          message: "Location not found",
        });
      }

      res.json({
        success: true,
        message: "Location deleted successfully",
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

module.exports = locationController;
