const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const db = require('./db')

app.locals.db = db

// middleware
app.use('/public', express.static(path.join(__dirname, '..', '..', 'dist')))

// Router
app.use('/', require('./routes/root'))
app.use('/app', require('./routes/app'))
app.use('/scenarios', require('./routes/scenarios')(db))

http.listen(3000, function () {
  console.log('listening on *:3000')
})