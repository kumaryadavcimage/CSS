import { Course } from "../models/course.model.js";
import {v2 as cloudinary} from 'cloudinary'
export const createCoure=async(req,res)=>{
    const {title,description,price}=req.body;

    try {
        if(!title || !description || !price){
        return res.status(400).json({errors: "All fields are required"})
    }
    //Image upload code
    const {image} = req.files
    if(!req.files || Object.keys(req.files).length===0){
        return res.status(400).json({success:false, message: 'No file uploaded'})
    }
    const allowedFormate=['image/png', 'image/jpeg']
    if(!allowedFormate.includes(image.mimetype)){
        return res.status(400).json({success:false, message: 'Invalid file formate, ONly PNG and JPG are allowed'});
    }
    // Cloudinary code
    const cloud_response=await cloudinary.uploader.upload(image.tempFilePath)
    if(!cloud_response || cloud_response.error){
        return res.status(400).json({success:false, message:'Error uploading file to cloudinary',error})
    }

    const courseData={
        title,
        description,
        price,
        image:{
            public_id: cloud_response.public_id,
            url:cloud_response.url,
        },
    };
    const course=await Course.create(courseData)
    return res.status(201).json({success:true, message:'Course Created successfully',
        course
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false, message:"Oops! Something went wrong",error
        })
    }
};

export const updateCourse=async(req,res)=>{
    const {courseId}=req.params;
    const {title,description,price,image}=req.body;

    try {
        const course = await Course.updateOne(
            {
                _id:courseId,
            },
            {
                title,
                description,
                price,
                image: {
                    public_id: image?.public_id,
                    url: image?.url,
                },
            }
        );
        return res.status(201).json({message: "Course updated successfully"})
    } catch (error) {
        return res.status(500).jscon({error:"Error incourse updating"});
        console.log("Error in course updating",error)
    }

}

export const deleteCourse=async(req,res)=>{
    const {courseId} =req.params;
    try {
        const course=await Course.findOneAndDelete({
            _id:courseId,
        })
        if(!course){
            return res.status(400).json({success:false, message:'Cousre is not found'})
        }
        return res.status(201).json({success:true,message:"Course deleted successfully"})
    } catch (error) {
        return res.status(500).json({success:false, message: "Error in course deletion"});
    }
}

export const getCourses = async(req,res) => {
    try {
        const courses=await Course.find({})
        res.json({courses})
    } catch (error) {
        return res.status(500).json({success:false, message:"Error when fetching the course "})
    }
}

export const courseDetails = async(req,res)=>{
    const {courseId} = req.params;
    try {
        const course=await Course.findById(courseId);
        if(!course){
            return res.status(400).json({success:false, message:"No course found"})
        }
        return res.status(201).json({success:true, message:"Course Details fetched successfully."})
    } catch (error) {
        return res.status(500).json({success:false, message:"Failed to courseDetails"})
    }
}