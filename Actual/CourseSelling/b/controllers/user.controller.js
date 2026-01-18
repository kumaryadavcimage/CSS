import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z} from 'zod';
import config from '../config.js';

export const signup=async (req,res) =>{
    const {firstName,lastName,email,password}=req.body;

    const userSchema=z.object({
        firstName: z.string().min(3,{message:"firstName must be atleast 3 char long"}),
        lastName: z.string().min(3,{message:"lastName must be atleast 3 char long"}),
        email: z.string().email(),
        password: z.string().min(6, {message: "password must be atleast 6 char long"}),
    });

    const validatedData = userSchema.safeParse(req.body);
    if(!validatedData.success){
        return res.status(400).json({errors:validatedData.error.issues.map((err)=>err.message)});
    }

    const hashedPassword=await bcrypt.hash(password,10);

    try {
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({errors:"User already exists"});
        }
        const newUser=new User({firstName,lastName,email,password:hashedPassword});
        await newUser.save();
        res.status(200).json({message:"Signup succeedded",newUser});
    } catch (error) {
        res.status(500).json({errors:"Error in user signup",error});
        console.log("Error in signuup",error)
    }
}

export const login=async(req,res) =>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email:email});
        const isPasswordCorrect=await bcrypt.compare(password,user.password);

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({errors:"Invalid credentials"})
        }

        // jwt code
        const token = jwt.sign(
            {
                id: user._id,
            },
            config.JWT_USER_PASSWORD
        );
        res.cookie("jwt",token)
        res.status(200).json({message:"Login successful",user,token});
    } catch (error) {
        res.status(500).json({errors: "Error in login"});
        console.log("error in login",error);
    }
}

export const logout=async(req,res) =>{
    try {
        res.clearCookie("jwt");
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        res.status(500).json({errors:"Error in logout"});
        console.log("Error in logout",error)
    }
}