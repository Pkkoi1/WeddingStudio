const Service = require("../models/Service");

const serviceController = {
  // GET /api/services
  getAllServices: async (req, res) => {
    try {
      const { category, page = 1, limit = 10 } = req.query;
      const query = { isActive: true };

      if (category) {
        query.category = category;
      }

      const services = await Service.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      const total = await Service.countDocuments(query);

      res.json({
        success: true,
        data: {
          services,
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

  // GET /api/services/:id
  getServiceById: async (req, res) => {
    try {
      const service = await Service.findById(req.params.id);

      if (!service || !service.isActive) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      res.json({
        success: true,
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // POST /api/services (Admin only)
  createService: async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        duration,
        includes,
        images,
        isActive = true,
      } = req.body;

      const serviceData = {
        name,
        description,
        category,
        price,
        duration,
        includes,
        images,
        isActive,
      };

      const service = new Service(serviceData);
      await service.save();

      res.status(201).json({
        success: true,
        message: "Service created successfully",
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // PUT /api/services/:id (Admin only)
  updateService: async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        duration,
        includes,
        images,
        isActive,
      } = req.body;

      const updateData = {};
      if (name !== undefined) updateData.name = name;
      if (description !== undefined) updateData.description = description;
      if (category !== undefined) updateData.category = category;
      if (price !== undefined) updateData.price = price;
      if (duration !== undefined) updateData.duration = duration;
      if (includes !== undefined) updateData.includes = includes;
      if (images !== undefined) updateData.images = images;
      if (isActive !== undefined) updateData.isActive = isActive;

      const service = await Service.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      res.json({
        success: true,
        message: "Service updated successfully",
        data: service,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // DELETE /api/services/:id (Admin only)
  deleteService: async (req, res) => {
    try {
      const service = await Service.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );

      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      res.json({
        success: true,
        message: "Service deleted successfully",
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

module.exports = serviceController;
