const express = require('express');
const router = require(express.Router);
const User = require('../controllers/users')

router.route('/signUp').post(User.signUp)
