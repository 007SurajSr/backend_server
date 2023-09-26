const express = require('express');
const { on } = require('nodemon');
const router = express.Router();
const User = require('../models/User')

//Create a User using: POST "/api/auth". Doesn't require Auth 


router.get('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save(); 
    res.send(req.body);
})

module.exports = router 