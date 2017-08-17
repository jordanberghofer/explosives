"use strict";
console.log("main.js");

let Handlebars = require('hbsfy/runtime'),
tpProducts = require('./products.js'),
tpCategories = require('./categories.js'),
tpTypes = require('./types.js'),

productsTemp = require('../templates/products.hbs'),
categoriesTemp = require('../templates/categories.hbs'),
typesTemp = require('../templates/types.hbs');


