const mongoose = require("mongoose");

const {Schema} = mongoose;

const subCategorySchema = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
    },
    isActive:{
        type: Boolean,
        default: false
    },
    status:{
        type: String,
        default: "waiting",
        enum:["waiting", "approve", "rejected"]
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:"Category"
    },
    update:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("SubCategory", subCategorySchema);