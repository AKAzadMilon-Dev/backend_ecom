const express = require('express')
const _ = express.Router()
const categoryController = require('../../controllers/categoryController.js')

_.post("/createcategory", categoryController)


module.exports = _