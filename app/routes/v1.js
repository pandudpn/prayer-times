"use strict"

//CONTROLLERS
/* shalat */
const sholatController      = require('../controllers/sholat')

//ROUTINGS
module.exports = (app) => {
    //DEFAULT
    app.get('/', (req, res) => sholatController.prayer(req, res, app.models))
}