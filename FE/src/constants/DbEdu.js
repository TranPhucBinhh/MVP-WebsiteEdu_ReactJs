const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://binhbinh:binhbinh240204@cluster0.mongodb.net/TPBEducation?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Dừng server nếu kết nối thất bại
  }
};

module.exports = connectDB;
