import { Router } from "express";
import User from '../models/User.js';
const authRouter = Router()

authRouter.post('/api/signup',async (req,res)=>{
    const {name,email,password}= req.body;
   try{
       const existingUser = await User.findOne({email})
       if (existingUser){
           return res
               .status(400)
               .json({message:"User with the same email already exists!"})
       }
       let user = new User({
           email,password,name,
       })
       user = await user.save()
       res.json(user)
   }catch (e) {
       res.status(500).json(
           {
               error:e.message
           }
       )
   }



})

export default authRouter;
