"use strict"
require('dotenv').config()

const CONFIG        = {}
CONFIG.env          = process.env.ENV           || 'development'
CONFIG.port         = process.env.PORT          || '8080'
CONFIG.url          = process.env.URL           || 'http://localhost:' + CONFIG.port
CONFIG.app          = process.env.APP           || 'prayer-times'
CONFIG.app_version  = process.env.APP_VERSION   || '1'
CONFIG.app_semantic = process.env.APP_SEMANTIC  || '0.1.0'
CONFIG.db_type      = process.env.DB_TYPE       || 'sql' //nosql
CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql' //mongodb
CONFIG.db_server    = process.env.DB_SERVER     || '127.0.0.1' //clusterexperiment-bqz4k.mongodb.net
CONFIG.db_port      = process.env.DB_PORT       || '3306' //27017
CONFIG.db_name      = process.env.DB_NAME       || '' //admin

module.exports = CONFIG