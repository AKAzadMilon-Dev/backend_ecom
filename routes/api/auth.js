const express = require('express')
const _ = express.Router()

_.get('/registration', (req, res)=>{
    res.send('ami auth routes')
})

module.exports = _