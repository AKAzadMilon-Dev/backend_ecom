const express = require('express')
const DbConnected = require('./config/DbConnected.js')
const app = express()


DbConnected()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)