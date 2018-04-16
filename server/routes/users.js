const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("user request received...");
  res.json(
      {id: 2, title: 'burger', receipe: 'rice', ingrediants: 'chicken'}
  )
});

module.exports = router;
