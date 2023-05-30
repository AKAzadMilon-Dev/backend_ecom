const express = require('express')
const _ = express.Router()
const {categoryController, categoryStatusController} = require('../../controllers/categoryController.js')

_.post("/createcategory", categoryController)
_.post("/categorystatus", categoryStatusController)


module.exports = _