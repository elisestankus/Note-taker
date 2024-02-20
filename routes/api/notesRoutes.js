//dependencies
const router = require('express').Router();
const fs = require('fs');

// GET request for all notes
router.get('/', (req, res) => {
    fs.readFile('../../db/db.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
      } else {
        const notes = JSON.parse(data)
        res.json(notes)
      }
    })
});

module.exports = router;