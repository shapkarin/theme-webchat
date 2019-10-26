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
  
  router.get('/:id', function (req, res) {
    const { id } = req.params
    db.models.scenarios.findOne({
      where: { id },
      include: ['messages'],
    })
      .then(scenario => {
        res.json(scenario)
      })
  })
  return router
}
