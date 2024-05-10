import User from "../models/User.js"
import {createError} from "../utils/error.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        const salt =  bcrypt.genSaltSync(10);
        const hash =  bcrypt.hashSync(req.body.password,salt)
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("User  has been created")
    } catch (err) {
        next(err)
    }
}
export const login = async (req, res, next) => {
    try {   
       const user = await User.findOne({username:req.body.username})
       if(!user) return next(createError(404,"User not found"))
       const isPassCorrect = await bcrypt.compare(req.body.password,user.password)
       if(!isPassCorrect) return next(createError(400,"Wrong password or username"))
       const token = jwt.sign({id:user._id,authority:user.authority.roleId},process.env.JWT)
       const {password,authority, ...otherProps} = user._doc;

       res.cookie("access_token",token,{
        httpOnly:true,
       }).status(200).json({details:{...otherProps,authority}, authority});
    } catch (err) {
        next(err)
    }
}
