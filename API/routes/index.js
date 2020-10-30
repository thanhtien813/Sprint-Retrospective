var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("1712813-Nguyen Thanh Tien Mid-tern Project API");
});

module.exports = router;
