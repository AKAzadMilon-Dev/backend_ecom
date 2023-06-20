const express = require('express')
const _ = express.Router()
const {becomeMerchantController, merchantStatusController} = require('../../controllers/merchantController.js')


_.post("/becomemerchant", becomeMerchantController)
_.post("/merchantstatus", merchantStatusController)

module.exports = _