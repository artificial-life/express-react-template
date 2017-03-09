var express = require('express');
var router = express.Router();

router.get('/random', function(req, res, next) {
  res.send({
    value: Math.random()
  });
});

module.exports = router;
