import Reservation from "../models/Reservation.js"



export const createReservation = async (req, res, next) => {
    const newReservation = new Reservation(req.body)
    try {
        const savedReservation = await newReservation.save()
        res.status(200).json(savedReservation)
    }
    catch (err) {
        next(err)
    }
}
export const updateReservation = async (req, res, next) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedReservation)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteReservation = async (req, res, next) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id)
        res.status(200).json("Reservation has been delete.")
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id)
        res.status(200).json(reservation)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getAllReservation = async (req,res,next)=>{
    try {
        const reservations = await Reservation.find()
        res.status(200).json(reservations)
    } catch (err) {
        next(err)
    }
}
