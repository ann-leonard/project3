const express = require('express');
const router = require('express-promise-router')();
const User = require('../controllers/users')
const { validateBody, schemas } = require('../helpers/routeHelpers')
const passport = require("passport")
const passportConf = require('../passport')

router.route("/sign-up").post(validateBody(schemas.authSchema),User.signup)

router.route("/sign-in").post(User.signin)

router.route("/secret").get(passport.authenticate('jwt',{ session : false }), User.secret)

module.exports=router