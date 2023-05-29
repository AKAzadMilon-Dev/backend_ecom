const express = require('express')
const _ = express.Router()
const registrationController = require('../../controllers/registrationController.js')
const loginController = require('../../controllers/loginController.js')

_.post('/registration', registrationController )
_.post('/login', loginController )

module.exports = _