const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to database ${conn.connection.host}`);
  } catch (error) {
    process.exit(1);
    console.log(error.message);
  }
};

module.exports = connectDB;
