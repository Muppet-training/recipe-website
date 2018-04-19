const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();


router.get('/', function(req, res) {
    Recipe.find().then(function (recipe) {
        res.send(recipe);
    });
});

router.post('/', function(req, res) {
    Recipe.create(req.body).then(function (recipe) {
        res.send('Add Recipe Successfully');
    });
});

router.put('/api/add-recipe/:id', function(req, res) {
    Recipe.findByIdAndUpdate({_id: req.params.id }, req.body).then(function () {
        Recipe.findOne({_id: req.params.id}).then(function (recipe) {
            res.send(recipe);
        });
    });
});

router.delete('/:id', function(req, res) {
    Recipe.remove({_id: req.params.id }).then(function () {
        res.send('Deleted Recipe successfully');
    });
});

module.exports = router;