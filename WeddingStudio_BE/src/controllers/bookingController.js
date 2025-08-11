const Booking = require("../models/Booking");
const Service = require("../models/Service");

const bookingController = {
  // POST /api/bookings
  createBooking: async (req, res) => {
    try {
      const { service: serviceId, ...bookingData } = req.body;

      // Verify service exists
      const service = await Service.findById(serviceId);
      if (!service || !service.isActive) {
        return res.status(400).json({
          success: false,
          message: "Service not found or inactive",
        });
      }

      // Create booking
      const booking = new Booking({
        ...bookingData,
        service: serviceId,
        totalAmount: service.price,
      });

      await booking.save();
      await booking.populate("service", "name price category");

      res.status(201).json({
        success: true,
        message: "Booking created successfully",
        data: booking,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // GET /api/bookings (Admin only)
  getAllBookings: async (req, res) => {
    try {
      const { status, page = 1, limit = 10 } = req.query;
      const query = {};

      if (status) {
        query.status = status;
      }

      const bookings = await Booking.find(query)
        .populate("service", "name price category")
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      const total = await Booking.countDocuments(query);

      res.json({
        success: true,
        data: {
          bookings,
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

  // GET /api/bookings/:id (Admin only)
  getBookingById: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id).populate(
        "service",
        "name price category description"
      );

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      res.json({
        success: true,
        data: booking,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // PUT /api/bookings/:id (Admin only)
  updateBooking: async (req, res) => {
    try {
      const { status, notes } = req.body;

      const updateData = {};
      if (status !== undefined) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;

      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      ).populate("service", "name price category");

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      res.json({
        success: true,
        message: "Booking updated successfully",
        data: booking,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // DELETE /api/bookings/:id (Admin only)
  deleteBooking: async (req, res) => {
    try {
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status: "cancelled" },
        { new: true }
      );

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      res.json({
        success: true,
        message: "Booking cancelled successfully",
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

module.exports = bookingController;
