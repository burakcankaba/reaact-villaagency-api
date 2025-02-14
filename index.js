import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import villasRoute from "./routes/villas.js"
import reservationsRoute from "./routes/reservations.js"
import listehomeRoute from "./routes/listhome.js"
import cors from "cors";
const app = express();
dotenv.config();


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDb")
      } 
      catch (error) {
        throw error
      }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

//middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/villas",villasRoute)
app.use("/api/reservations",reservationsRoute)
app.use("/api/listhomes",listehomeRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    })
})

app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend");
})
