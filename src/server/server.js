const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
// routes
const root = require('./routes/root')
const chatbots = require('./routes/chatbots')

// middleware
app.use('/public', express.static(path.join(__dirname, '..', '..', 'dist')))

// Router
app.use('/', root)
app.use('/chatbots', chatbots)

http.listen(3000, function () {
  console.log('listening on *:3000')
})