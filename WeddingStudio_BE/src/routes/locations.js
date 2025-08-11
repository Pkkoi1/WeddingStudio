const express = require("express");
const locationController = require("../controllers/locationController");
const { auth, adminAuth } = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * /api/locations:
 *   get:
 *     summary: Get all locations
 *     tags: [Locations]
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Filter by city
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [outdoor, indoor, beach, mountain, urban, historical, garden, church]
 *         description: Filter by category
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of locations
 */
router.get("/", locationController.getAllLocations);

/**
 * @swagger
 * /api/locations/{id}:
 *   get:
 *     summary: Get location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Location details
 *       404:
 *         description: Location not found
 */
router.get("/:id", locationController.getLocationById);

/**
 * @swagger
 * /api/locations:
 *   post:
 *     summary: Create new location (Admin only)
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       201:
 *         description: Location created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Admin access required
 */
router.post("/", auth, adminAuth, locationController.createLocation);

/**
 * @swagger
 * /api/locations/{id}:
 *   put:
 *     summary: Update location (Admin only)
 *     tags: [Locations]
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
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       404:
 *         description: Location not found
 */
router.put("/:id", auth, adminAuth, locationController.updateLocation);

/**
 * @swagger
 * /api/locations/{id}:
 *   delete:
 *     summary: Delete location (Admin only)
 *     tags: [Locations]
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
 *         description: Location deleted successfully
 *       404:
 *         description: Location not found
 */
router.delete("/:id", auth, adminAuth, locationController.deleteLocation);

module.exports = router;

/**
 * @swagger
 * /api/locations:
 *   get:
 *     summary: Get all locations
 *     tags: [Locations]
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Filter by city
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [outdoor, indoor, beach, mountain, urban, historical, garden, church]
 *         description: Filter by category
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of locations
 */
router.get("/", async (req, res) => {
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
 * /api/locations/{id}:
 *   get:
 *     summary: Get location by ID
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Location details
 *       404:
 *         description: Location not found
 */
router.get("/:id", async (req, res) => {
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
});

/**
 * @swagger
 * /api/locations:
 *   post:
 *     summary: Create new location (Admin only)
 *     tags: [Locations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       201:
 *         description: Location created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Admin access required
 */
router.post("/", auth, adminAuth, async (req, res) => {
  try {
    // Chỉ lấy các trường cần thiết từ request body
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
});

/**
 * @swagger
 * /api/locations/{id}:
 *   put:
 *     summary: Update location (Admin only)
 *     tags: [Locations]
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
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       404:
 *         description: Location not found
 */
router.put("/:id", auth, adminAuth, async (req, res) => {
  try {
    // Chỉ lấy các trường cần thiết từ request body
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
});

/**
 * @swagger
 * /api/locations/{id}:
 *   delete:
 *     summary: Delete location (Admin only)
 *     tags: [Locations]
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
 *         description: Location deleted successfully
 *       404:
 *         description: Location not found
 */
router.delete("/:id", auth, adminAuth, async (req, res) => {
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
});

module.exports = router;
