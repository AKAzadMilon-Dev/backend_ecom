const express = require('express')
const _ = express.Router()
const {categoryController, categoryStatusController, getAllCategoryController} = require('../../controllers/categoryController.js')

_.post("/createcategory", categoryController)
_.post("/categorystatus", categoryStatusController)
_.get("/getallcategory", getAllCategoryController)


module.exports = _