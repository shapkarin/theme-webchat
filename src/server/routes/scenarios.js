const express = require('express')
const router = new express.Router()
const path = require('path')
const app = express()

module.exports = (db) => {
  router.get('/', function (req, res) {
    db.models.scenarios.findAll({ include: ['messages'] })
      .then(scenarios => {
        res.json(scenarios)
      })
  })
  return router
}
