import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
  console.log("mongo uri", process.env.MONGO_URI);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
});
