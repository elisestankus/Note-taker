//dependencies
const router = require('express').Router();
const path = require('path');

//get route for homepage
router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

//get route for notes page
router.get('/notes', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/notes.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;