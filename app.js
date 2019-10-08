"use strict"
const config  = require('./app/config/config')
// EXPRESS
const express = require('express')
const app     = express()

// LOGGER FOR DEV
const logger = require('morgan')
if(config.env==='development'){ app.use(logger('dev')) }
// I/O
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser(config.secret_key_encrypt))

// MODELS
app.models              = {}
// CONTROLLERS ROUTE
app.routes = require('./app/routes/v1')(app)

module.exports = app