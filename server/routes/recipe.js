const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();


router.get('/', function(req, res, next) {
    console.log('user request received...');
    res.json({
        id: 2,
        name: 'Cake',
        type: 'Dessert',
        total_grams: 450
    });
});

router.post('/', function(req, res, next) {
    console.log('user add data', req.body);
    Recipe.create(req.body).then(function (recipe) {
        res.send(recipe);
    });
});

router.put('/', function(req, res, next) {
    console.log('user add data', req.body);
    res.end();
});

module.exports = router;