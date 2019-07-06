const express = require('express');
const router = require('express-promise-router')();
const User = require('../controllers/users')
const { validateBody, schemas } = require('../helpers/routeHelpers')

router.route("/sign-up").post(validateBody(schemas.authSchema),User.signup)

router.route("/sign-in").post(User.signin)

router.route("/secret").post(User.secret)

module.exports=router