import express from "express";
import { countByCity, createVilla, deleteVilla, getAllVillas, getVilla, getVillaNames, updateVilla } from "../controllers/villa.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//create
router.post("/",verifyAdmin, createVilla)
//update
router.put("/:id",verifyAdmin, updateVilla)
//delete
router.delete("/:id",verifyAdmin,deleteVilla)
//get
router.get("/find/:id", getVilla)
//get all
router.get("/", getAllVillas)
//getVillaNames
router.get("/getVillaNames", getVillaNames)
//count by City
router.get("/countByCity", countByCity)

export default router