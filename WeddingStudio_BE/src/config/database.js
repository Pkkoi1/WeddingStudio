const mongoose = require("mongoose");
const User = require("../models/User");
const Service = require("../models/Service");
const Album = require("../models/Album");
const AlbumCover = require("../models/AlbumCover");
const Booking = require("../models/Booking");
const Location = require("../models/Location");
mongoose = require("mongoose");
const User = require("../models/User");
const Service = require("../models/Service");
const Album = require("../models/Album");
const Booking = require("../models/Booking");
const Location = require("../models/Location");

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI || "mongodb://localhost:27017/wedding_studio";

    await mongoose.connect(mongoUri, {
      dbName: "wedding_studio", // Đảm bảo database name
    });

    console.log(`✅ Connected to MongoDB Atlas: ${mongoose.connection.name}`);

    // Tạo collections rỗng nếu chưa tồn tại
    await createCollections();
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

const createCollections = async () => {
  try {
    // Tạo collections rỗng bằng cách kiểm tra và tạo index
    const db = mongoose.connection.db;

    const collections = [
      "users",
      "services",
      "albums",
      "albumcovers",
      "bookings",
      "locations",
    ];
    const existingCollections = await db.listCollections().toArray();
    const existingNames = existingCollections.map((col) => col.name);

    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(
      `🗂️  Existing collections: ${existingNames.join(", ") || "none"}`
    );

    for (const collectionName of collections) {
      if (!existingNames.includes(collectionName)) {
        await db.createCollection(collectionName);
        console.log(`✅ Created collection: ${collectionName}`);
      } else {
        console.log(`⚡ Collection exists: ${collectionName}`);
      }
    }

    // Đảm bảo các index được tạo
    await User.ensureIndexes();
    await Service.ensureIndexes();
    await Album.ensureIndexes();
    await AlbumCover.ensureIndexes();
    await Booking.ensureIndexes();
    await Location.ensureIndexes();

    console.log("🎉 Database collections ready!");
  } catch (error) {
    console.error("❌ Error creating collections:", error);
  }
};

module.exports = connectDB;
