var express = require('express');
var router = express.Router();

/* GET material API. */
router.get('/material', function(req, res) {
  res.json({ version: "1.3.4" });
});

module.exports = router;
