const express = require('express')
const _ = express.Router()
const {subCategoryController, subCategoryStatusController, getAllSubCategoryController} = require('../../controllers/subCategoryController.js')

_.post("/createsubcategory", subCategoryController)
_.post("/subcategorystatus", subCategoryStatusController)
_.get("/getallsubcategory", getAllSubCategoryController)


module.exports = _