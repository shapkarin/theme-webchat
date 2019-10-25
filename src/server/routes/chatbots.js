const express = require('express')
const router = new express.Router()
const path = require('path')
const io = require('socket.io')()

router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = router