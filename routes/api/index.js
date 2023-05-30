const express = require('express')
const _ = express.Router()
const authRoutes = require('./auth')
const categoryRoutes = require('./category')
const subcategoryRoutes = require('./subcategory')


_.use("/auth", authRoutes)
_.use("/category", categoryRoutes)
_.use("/subcategory", subcategoryRoutes)

module.exports = _