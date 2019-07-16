const express = require('express');
const router = require('express-promise-router')();
const Stock = require('../controllers/stock')
const { validateBody, schemas } = require('../helpers/routeHelpers')
const passport = require("passport")
const passportConf = require('../passport')

router.route('/save').post()