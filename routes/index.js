const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the URL Shortener API');
});

module.exports = router;
