const express = require('express')
const router = new express.Router()
const path = require('path')
const fs = require('fs')
const showdown = require('showdown'),
  converter = new showdown.Converter(),
  text = '# hello, markdown!'

router.get('/', function (req, res) {
  const readmePath = path.join(__dirname, '..', '..', '..', 'README.md')
  fs.readFile(readmePath, 'utf8', (err, mdText) => {
    if (err) console.error(err)
    res.send(`
      <style>.container { width: 80%; max-width: 1200px; margin: auto }</style>
      <div class="container">
        ${converter.makeHtml(mdText)}
      </div>
    `)
  })
})

module.exports = router