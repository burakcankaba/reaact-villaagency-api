import express from "express";
import {createListHome, deleteListHome, getAllListHome} from "../controllers/listHome.js"
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//create
router.post("/", createListHome)
//delete
router.delete("/:id",verifyUser, deleteListHome)
//getAll
router.get("/",verifyUser, getAllListHome)

export default router