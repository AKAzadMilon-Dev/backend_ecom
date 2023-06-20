const express = require('express')
const _ = express.Router()
const registrationController = require('../../controllers/registrationController.js')
const loginController = require('../../controllers/loginController.js')
const emailVarificationOtpMatch = require('../../controllers/emailVarificationOtpMatch.js')
const {becomeMerchantController} = require('../../controllers/merchantController.js')

_.post('/registration', registrationController )
_.post('/login', loginController )
_.post('/emailVarificationOtpMatch', emailVarificationOtpMatch )
_.post('/becomemerchant', becomeMerchantController )

module.exports = _