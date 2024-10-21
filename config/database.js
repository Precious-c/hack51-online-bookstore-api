const mongoose = require("mongoose");

//Connect to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`MongoDb connected to ${conn.connection.host} ${conn.connection.name}`);
  } catch (err) {
    console.log("Database connection error: \n", err);
    process.exit();
  }
};

module.exports = connectDB;
