const express = require('express')
const _ = express.Router()
const {subCategoryController, subCategoryStatusController} = require('../../controllers/subCategoryController.js')

_.post("/createsubcategory", subCategoryController)
_.post("/subcategorystatus", subCategoryStatusController)


module.exports = _