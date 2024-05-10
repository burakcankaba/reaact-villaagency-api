import mongoose from 'mongoose';
const { Schema } = mongoose;
const ReservationSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    passport:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    note:{
        type:String
    },
    villaId:{
        type:String
    },
    checkinDate:{
        type:Date
    },
    checkoutDate:{
        type:Date
    },
    payment:{
        type:String
    },
    paymentType:{
        type:String
    },
    totalPayment:{
        type:Number
    },
    reservationDate:{
        type:Date
    },
    isBooked:{
        type:Boolean,
        default: false
    },
    isPending:{
        type:Boolean,
        default: false
    },
    confirmedDate:{
        type:Date
    }

})
export default mongoose.model("Reservation", ReservationSchema)