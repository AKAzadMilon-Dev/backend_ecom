const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    fullname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    emailVerified:{
        type: String,
        default: false
    },
    merchant:{
        type: Schema.Types.ObjectId,
        ref: "merchant",
        default: null
    },
    googleId:{
        type: String
    },
    facebookId:{
        type: String
    },
    avater:{
        type: String
    },
    role:{
        type: String,
        default: "member",
        enum: ["admin", "member", "merchant"]
    },
    resetPasswordToken:{
        type: String,
        default: "member",
        enum: ["admin", "member", "merchant"]
    },
    resetPasswordExpires:{
        type: Date
    },
    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", userSchema);