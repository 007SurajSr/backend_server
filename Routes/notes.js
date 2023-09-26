const express = require('express');
const { on } = require('nodemon');
const router = express.Router();

router.get('/', (req, res) => {
     
    res.json([])
})

module.exports = router; 