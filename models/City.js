import mongoose from 'mongoose';
const { Schema } = mongoose;
const CitySchema = new mongoose.Schema({
    city: {
        type:String
    }
});

export default mongoose.model("City", CitySchema)