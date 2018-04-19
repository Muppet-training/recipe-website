const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    Recipe.findOne({_id: req.params.id}).then(function(recipe) {
        res.send(recipe);
    });
});

module.exports = router;
