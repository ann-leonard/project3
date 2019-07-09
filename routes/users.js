const express = require('express');
const router = require('express-promise-router')();
const User = require('../controllers/users')
const { validateBody, schemas } = require('../helpers/routeHelpers')
const passport = require("passport")
const passportConf = require('../passport')

router.route("/sign-up")
    .post(validateBody(schemas.authSchema),User.signup)

router.route("/sign-in")
    .post(validateBody(schemas.authSchema),passport.authenticate('local', { session : false, successRedirect:'/user/dashboard' }),User.signin,)

router.route("/dashboard").get(passport.authenticate('jwt',{ session : false }), User.secret)

module.exports=router