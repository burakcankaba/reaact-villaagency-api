import mongoose from 'mongoose';
const { Schema } = mongoose;
const ListHomeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    villaLocation: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },

});

export default mongoose.model("ListHome", ListHomeSchema)