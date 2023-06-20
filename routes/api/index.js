const express = require('express')
const _ = express.Router()
const authRoutes = require('./auth')
const categoryRoutes = require('./category')
const subcategoryRoutes = require('./subcategory')
const merchantRoutes = require('./merchant')


_.use("/auth", authRoutes)
_.use("/category", categoryRoutes)
_.use("/subcategory", subcategoryRoutes)
_.use("/merchant", merchantRoutes)

module.exports = _