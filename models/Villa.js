import mongoose from 'mongoose';
const { Schema } = mongoose;
const roomSchema = new mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    img: [String]
})
const distanceSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    img: [String]
})
const bookedSchema = new mongoose.Schema({
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    reservationId: {
        type: String
    }
})
const pendingSchema = new mongoose.Schema({
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    reservationId: {
        type: String
    }
})
const priceSchema = new mongoose.Schema({
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    minStay:{
        type: Number
    },
    price:{
        type:Number
    }
})
const VillaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    sublocation: {
        type: String
    },

    adress: {
        type: String
    },
    distances:[distanceSchema],
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    shortdesc: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    map:{
        lat:{
            type:Number
        },
        long:{
            type:Number
        }
    },
    rules: {
        checkinTime: {
            type: String
        },
        checkoutTime: {
            type: String
        },
        cleaningFee: {
            type: String
        },
        deposit: {
            type: String
        },
        includeInPrice: {
            type: String
        }

    },
    props: {
        personCount: {
            type: String
        },
        bedRoomCount: {
            type: String
        },
        bathRoomCount: {
            type: String
        },
        bedCount: {
            type: String
        }
    },
    pool: {
        isPool: {
            type: Boolean
        },

        height: {
            type: Number
        },
        width: {
            type: Number
        },
        depth: {
            type: Number
        }

    },
    prices:[priceSchema],
    facilities: [String],
    rooms: [roomSchema]
    ,
    calendar: {
        booked: [bookedSchema],
        pending: [pendingSchema]
    }


});

export default mongoose.model("Villa", VillaSchema)