import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import mongoose from "mongoose";
import userRoute from './routes/user.route.js';


import courseRoute from "./routes/course.route.js";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Mongodb Connection Error", error);
}

//defining routes
app.use("/api/v1/course", courseRoute);

// definig userRouter
app.use("/api/v1/user",userRoute)

//Cloudinary configuration code
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});
app.listen(port, () => {
  console.log(`Server running  on port  ${port}`);
});
