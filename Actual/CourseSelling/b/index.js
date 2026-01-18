import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';

import courseRoute from './routes/course.route.js';
import userRoute from './routes/user.route.js';
import fileUpload from 'express-fileupload';

const app=express();
dotenv.config();

//middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

const port=process.env.PORT || 3000;
const DB_URI=process.env.MONGO_URI

//Mongoose connection
try {
    await  mongoose.connect(DB_URI);
    console.log("connected to MongoDB")
} catch (error) {
    console.log("Error in DB connection",error)
}

//defining routes
app.use("/api/v1/course",courseRoute);
app.use("/api/v1/user",userRoute);

// Cloudinary configuration code
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret:process.env.api_secret,
});

app.listen(port,() =>{
    console.log(`Server running on port ${port}`)
}) 