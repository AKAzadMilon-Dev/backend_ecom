const express = require('express')
const _ = express.Router()
const {secureUpload, createProduct} = require('../../controllers/productController.js')


_.post("/createproduct", secureUpload, createProduct)


module.exports = _