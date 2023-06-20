const mongoose = require("mongoose");

const {Schema} = mongoose;

const storeSchema = new Schema({
    storename:{
        type: String,
        require: true
    },
    officialemail:{
        type: String,
        require: true
    },
    officialphone:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    isActive:{
        type: Boolean,
        default: false
    },
    status:{
        type: String,
        default: "waiting",
        enum:["waiting", "approved", "rejected"]
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    update:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Store", storeSchema);