import { User } from "../models/user.model.js";
export const signup=async(req,res)=>{
    const {firstName,lastName,email,password}=req.body;
    console.log(req.body)
    try {
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({success:false, messsage:'User already exists'});
        }
        const newUser = new User({firstName,lastName,email, password});
        console.log(newUser)
        await newUser.save();
        return res.status(201).json({success:true, message:'Signup succedded',newUser});

    } catch (error) {
        return res.status(500).json({success:false, message:'User name is signup failed',error})
    }
}