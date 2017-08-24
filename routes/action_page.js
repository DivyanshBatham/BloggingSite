var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.post('/', function(req, res, next) {

	console.log('req.body');
	console.log(req.body);

	// Store hash instead of actual password.
	// var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

	var sql = `INSERT INTO users VALUES( "${req.body.username}", "${req.body.password}" );`;
	// var sql = `INSERT INTO users VALUES( "${req.body.username}", "${hash}" );`;
	db.query(sql, function(err,result){
		if(err) throw err;
		console.log("1 record inserted");
	});

	//res.send("User registered");
	res.render('index', { title: 'Home', layout: 'in'});			// Should Log in to user and pass several ejs variables.
});

// // This should be an illegal move : What to do?
// router.get('/', function(req, res, next) {
// 	res.send("User registered");
// });

module.exports = router;
