const mongoose = require("mongoose");
const fs = require("fs");

async function fixObjectIds() {
  try {
    // Connect to MongoDB
    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://pkkoi1:3eTSqhKgQ2gLZ9e8@cluster0.2s2zf.mongodb.net/wedding_studio";
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to MongoDB");

    // Read current locations.json
    const locationsData = JSON.parse(
      fs.readFileSync("./locations.json", "utf8")
    );
    console.log(`📊 Found ${locationsData.length} locations in JSON file`);

    const db = mongoose.connection.db;
    const collection = db.collection("locations");

    // Clear existing data
    console.log("🗑️ Clearing existing location data...");
    await collection.deleteMany({});

    // Insert with proper ObjectId conversion
    const convertedLocations = locationsData.map((location) => {
      if (location._id && location._id.$oid) {
        // Already in correct format
        location._id = new mongoose.Types.ObjectId(location._id.$oid);
      } else if (typeof location._id === "string") {
        // Convert string to ObjectId
        location._id = new mongoose.Types.ObjectId(location._id);
      }
      return location;
    });

    console.log("📥 Inserting locations with proper ObjectIds...");
    await collection.insertMany(convertedLocations);

    console.log("✅ Successfully imported locations with proper ObjectIds!");

    // Verify the import
    const count = await collection.countDocuments();
    console.log(`🎉 Verification: ${count} locations imported`);

    // Test a query
    const testLocation = await collection.findOne({
      _id: new mongoose.Types.ObjectId("60f7b3b3b3b3b3b3b3b3b3e2"),
    });
    console.log(
      "🔍 Test query result:",
      testLocation ? `Found: ${testLocation.name}` : "Not found"
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

fixObjectIds();
