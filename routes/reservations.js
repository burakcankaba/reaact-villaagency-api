import express from "express"
import {createReservation, deleteReservation, getAllReservation, getReservation, updateReservation} from "../controllers/reservation.js"
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();
//create
router.post("/",createReservation)
//update
router.put("/:id",verifyAdmin,updateReservation)
//delete
router.delete("/:id",verifyAdmin,deleteReservation)
//get
router.get("/find/:id",getReservation)
//getAll
router.get("/",getAllReservation)

export default router;