const express = require('express')
const _ = express.Router()

_.post('/registration', (req, res)=>{
    const {fullname, email, password} = req.body
    console.log(fullname, email, password)
})

module.exports = _