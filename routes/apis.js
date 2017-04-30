var express = require('express');
var router = express.Router();
// var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sites = [
    ["Material Theme", "https://api.viosey.com/material", "GET"]
  ];
  res.render('index', { 
    title: "Viosey's API",
    sites: sites
  });
});

/* GET Material API. */
router.get('/material', function(req, res) {
  res.json({ version: "1.3.4" });
});

/* GET Material API. */
// router.get('/paranoia', function(req, res) {
//   fs.readFile('https://viosey.com/paranoia.json', function(err, data){
//     if(err) console.log(err);

//     var jsonObj = JSON.parse(data);
//     var word = jsonObj[0];
//     console.log(word);
//   });
//   res.send('word');
// });

module.exports = router;
