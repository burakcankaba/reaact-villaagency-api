import express from "express";
import {deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/checkouthentication",verifyToken,(req,res,next)=>{
//    res.send("Hello user, you re logged in") 
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you re logged in and you can delete your account") 
//  })
//  router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello user, you re logged in and you can delete all account") 
//  })
//update
router.put("/:id",verifyUser, updateUser)
//delete
router.delete("/:id",verifyUser, deleteUser)
//get
router.get("/:id",verifyUser, getUser)
//get all
router.get("/",verifyAdmin, getAllUsers)

export default router