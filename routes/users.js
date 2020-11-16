var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  filePath = path.resolve("./public/data", "jsondata.json");
  res.sendFile(filePath);
});

module.exports = router;
