const express = require('express');
const router = require('express-promise-router')();
const User = require('../controllers/users')
const API = require('../controllers/API')
const { validateBody, schemas } = require('../helpers/routeHelpers')
const passport = require("passport")
const passportConf = require('../passport')

router.route("/sign-up")
    .post(validateBody(schemas.authSchema),User.signup)

router.route("/sign-in")
    .post(validateBody(schemas.authSchema),passport.authenticate('local', { session : false}),User.signin,function(req,res){
        console.log('hey there')
    })

router.route("/dashboard").get(passport.authenticate('jwt', {session:false}),User.dashboard)

router.route("/api/save")
    .post(API.dailyTimeSeries)

router.route("/api/series/:id").post(API.getSeries)

module.exports=router