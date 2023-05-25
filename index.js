require('dotenv').config()
const express = require('express')
const DbConnected = require('./config/DbConnected.js')
var cors = require('cors')
const app = express()


app.use(cors())


DbConnected()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)