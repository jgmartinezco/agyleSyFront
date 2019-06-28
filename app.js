'use strict'
const express = require('express');
var homeController = require('./controllers/home');
const app = express();
module.exports = app;

var port = process.env.PORT || 3100;


app.get('/', homeController.homeInit);


app.listen(port, () => console.log('server is running'));