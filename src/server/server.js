const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')

app.use('/public', express.static(path.join(__dirname, '..', '..', 'dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})