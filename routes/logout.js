var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.get('/', function(req, res, next) {
	req.session.reset();
	res.redirect('/');
});

module.exports = router;
