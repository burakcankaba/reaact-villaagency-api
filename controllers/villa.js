import Villa from "../models/Villa.js"

export const createVilla = async (req,res,next)=>{
    const newVilla = new Villa(req.body)
    try {
        const savedVilla = await newVilla.save()
        res.status(200).json(savedVilla)
    }
    catch (err) {
        next(err)
    }
}
export const updateVilla = async (req,res,next)=>{
    try {
        const updatedVilla = await Villa.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedVilla)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
export const deleteVilla = async (req,res,next)=>{
    try {
        await Villa.findByIdAndDelete(req.params.id)
        res.status(200).json("Villa has been delete")
    }
    catch (err) {
        res.status(500).json(err)
    }
}
export const getVilla = async (req,res,next)=>{
    try {
        const villa = await Villa.findById(req.params.id)
        res.status(200).json(villa)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
export const getAllVillas = async (req,res,next)=>{
    try {
        const villas = await Villa.find()
        res.status(200).json(villas)
    }
    catch (err) {
        next(err)
    }
}
export const getVillaNames = async (req,res,next)=>{
    try {
        let villaNames = [];
        const villas = await Villa.find()
        await Promise.all(villas.map((item) => villaNames.push({
            id:item._id,
            name:item.name,
            city:item.city,
            location:item.location,
            img:item.photos[0]
        })));
        
        
        res.status(200).json(villaNames)
        
    }
    catch (err) {
        next(err)
    }
}
export const countByCity = async (req,res,next)=>{
    try {
        let countByCity = [];
        const villas = await Villa.find()
        await Promise.all(villas.map((item) => countByCity.push({
            id:item._id,
            city:item.city,
            location:item.location
        })));
        
        
        res.status(200).json(countByCity)
        
    }
    catch (err) {
        next(err)
    }
}
