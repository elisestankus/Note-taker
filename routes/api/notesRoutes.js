//dependencies
const router = require('express').Router();
const fs = require('fs');

// GET request for all notes
router.get('/notes', (req, res) => {
    fs.readFile('../../db/db.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data))
      }
    })
});

module.exports = router;