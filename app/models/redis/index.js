"use strict"

const rPort   = 6379
const rHost   = '127.0.0.1'
const redis   = require('redis')
const chalk   = require('chalk')
const client  = redis.createClient(rPort, rHost)
client.on('connect', function() {
    console.log(chalk.green('** Redis client connected **'))
})
client.on('error', function (err) {
    console.log(chalk.green(`** Something went wrong: ${err}`))
})


module.exports = client
