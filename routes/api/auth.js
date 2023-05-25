const express = require('express')
const emailValidation = require('../../helper/emailValidation.js')
const passwordValidation = require('../../helper/passwordValidation.js')
const _ = express.Router()

_.post('/registration', (req, res)=>{
    const {fullname, email, password} = req.body
    
    if(!fullname){
        return res.send({error: "Enter Your Fullname!"})
    }else if(!email){
        return res.send({error: "Enter Your Email!"})
    }else if(!emailValidation(email)){
        return res.send({error: "Plese Enter Valid Email!"})
    }else if(!password){
        return res.send({error: "Enter Your Password!"})
    }else if(!passwordValidation(password)){
        return res.send({error: "Password at least one number and one Capital letter exists in the password and minimum length of 8 characters!"})
    }else{
        return res.send({success: "Registration Successfully!"})
    }
})

module.exports = _