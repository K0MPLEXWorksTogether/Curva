const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connectionUrl = process.env.MONGODB_URL;
    const connection = await mongoose.connect(connectionUrl);
    console.info(
      "MongoDB connection successful! At host:",
      connection.connections[0]["host"]
    );
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
