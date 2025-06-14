import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary.js";


export const signup = async (req, res) => {
    const { email, fullName, password } = req.body;
    if (!email || !fullName || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (!email.includes("@")) {
        return res.status(400).json({ message: "Please enter a valid email" });
    }
   try {
     if(password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
     }
     const user=await User.findOne({ email });
     if(user) {
        return res.status(400).json({ message: "User already exists" });
     }
     const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=new User({
        email,
        fullName,
        password:hashedPassword,
    });
    if(newUser){
        generateToken(newUser._id,res)
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            email:newUser.email,
            fullName:newUser.fullName,
            profilePic:newUser.profilePic,
        });
    }
    else{
        console.log("Error in creating user",error.message);
        res.status(500).json({ message: "Internal server error" });
    }
   } catch (error) {
    res.status(400).json({ message: "Invalid user data" });
   }

}
export const login = async (req, res) => {
    const{email,password}=req.body;
    try {
       const user= await User.findOne({email});
       if(!user) {
        return res.status(400).json({ message: "Incorrect credentials" });
       }
        const isPasswordCorrect =await bcrypt.compare(password,user.password);   
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect credentials" });
        }
        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            email:user.email,
            fullName:user.fullName,
            profilePic:user.profilePic,
        })
       }
    catch (error) {
        console.log("Error in login",error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const logout = async (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({ message: "Logged out successfully" });
  }
  catch (error) {
    console.log("Error in logout",error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
export const updateProfile = async (req, res) => {
    try {
        const{profilePic}=req.body;
        const userId=req.user._id;
        if(!profilePic) {
            return res.status(400).json({ message: "Please provide a profile picture" });
        }
        const uploadedResponse=await cloudinary.uploader.upload(profilePic);
        const updatedUser=await User.findByIdAndUpdate(
            userId,
            { profilePic: uploadedResponse.secure_url },
            { new: true }
        )
        res.status(200).json(updatedUser)

    } catch (error) {
        console.log("Error in updating profile",error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const checkAuth=   async (req,res) => {
    try {
        res.status(200).json(req.user); 
    }
    catch (error) {
        console.log("Error in checking auth",error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}