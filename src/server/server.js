const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
// routes
const rootRoutes = require('./routes/root')
const appRoutes = require('./routes/app')

// middleware
app.use('/public', express.static(path.join(__dirname, '..', '..', 'dist')))

// Router
app.use('/', rootRoutes)
app.use('/app', appRoutes)

http.listen(3000, function () {
  console.log('listening on *:3000')
})