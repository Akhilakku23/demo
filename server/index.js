// import express from 'express'
// import mongoose  from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/user.route.js';
// import authRouter from './routes/auth.route.js';
// dotenv.config();

// mongoose.connect(process.env.MONGODB_URI)
//     .then(()=>
//         console.log('connected to mongodb'));


// // Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// const app = express() 
  
// app.listen(3000, () => {
//     console.log('server is running on port 3000!');
// });

// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config(); // Load .env variables

const app = express();
const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Middleware
app.use(express.json()); // Ensure JSON parsing

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}!`);
});
