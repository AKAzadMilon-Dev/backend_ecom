require('dotenv').config()
const express = require('express')
const DbConnected = require('./config/DbConnected.js')
const routes = require('./routes')
var cors = require('cors')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
DbConnected()
app.use(routes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)