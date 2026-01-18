import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {v2 as cloudinary} from 'cloudinary';
import fileUpload from 'express-fileupload';
dotenv.config();

import courseRoute from './routes/course.route.js'
import userRoute from './routes/user.route.js'
const app=express();
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
const port=process.env.PORT || 3000;
const DB_URI=process.env.MONGO_URI



app.get("/",(req,res)=>{
    res.send("Hello world")
})

try {
    await mongoose.connect(DB_URI);
    console.log('Connect to MongoDB')
} catch (error) {
    console.log(error);
}

app.use('/api/v1/course',courseRoute);
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
})
app.use('/api/v1/user',userRoute)

app.listen(port,()=>{
    console.log(`Serrver runnin on http://localhost:${port}`)
}); 