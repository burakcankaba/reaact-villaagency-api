import mongoose from 'mongoose';
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: [String]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    startDate:{
        type:Date
    },
    authority: {
        roleId: { 
            type: Number,
            default:1 
        },
        roleName: { 
            type: String,
            default:"User"
        }
    }

}, { timestamps: true });

export default mongoose.model("User", UserSchema)