const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    total_grams: { type: String, required: true }
});

const Recipe = mongoose.model('addrecipe', RecipeSchema);
module.exports = Recipe;