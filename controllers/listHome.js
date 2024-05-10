import ListHome from "../models/ListHome.js"
export const createListHome = async (req,res,next)=>{
    const newListHome = new ListHome(req.body)
    try {
        const savedListHome = await newListHome.save()
        res.status(200).json(savedListHome)
    }
    catch (err) {
        next(err)
    }
}
export const deleteListHome = async (req,res,next)=>{
    try {
        await ListHome.findByIdAndDelete(req.params.id)
        res.status(200).json("ListHome has been delete")
    }
    catch (err) {
        next(err)
    }
}
export const getAllListHome = async (req,res,next)=>{
    try {
        const ListHomes = await ListHome.find()
        res.status(200).json(ListHomes)
    }
    catch (err) {
        next(err)
    }
}