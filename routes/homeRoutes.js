//dependencies
const router = require('express').Router();

//get route for homepage
router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});
