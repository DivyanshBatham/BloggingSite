var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.get('/', function(req, res, next) {

	//console.log('req.body');
	//console.log(req.body);
	res.render('signup', { title: 'Signup', error:'', layout: 'out'});
});


router.post('/', function(req, res, next) {

	console.log('req.body');
	console.log(req.body);

	// Validation of Data :
	var sql = `SELECT * FROM users WHERE username="${req.body.username}"`;
	db.query(sql, function(err,result){
		if(err) throw err;
		//console.log(result, result.length);

		if(result.length === 0) // No such user already registered, registering should be done:
		{
					console.log("No such user already registered, registering should be done:");
					var sql2 = `INSERT INTO users VALUES( "${req.body.username}", "${req.body.password}" );`;
					// var sql = `INSERT INTO users VALUES( "${req.body.username}", "${hash}" );`;
					db.query(sql2, function(err,result2){
						if(err) throw err;
						console.log("1 record inserted");
						
						// Set the session:
						req.session.user = req.body;

						res.redirect('/');
						//res.render('index', { title: 'Home', layout: 'in'});			// Should Log in to user and pass several ejs variables.
					});

		}
		else
		{
				console.log("Else Part");
				res.render('signup', { title: 'Signup', error: 'User Already Exists', layout: 'out'});
		}
		
	});






	// Store hash instead of actual password.
	// var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

	// var sql = `INSERT INTO users VALUES( "${req.body.username}", "${req.body.password}" );`;
	// // var sql = `INSERT INTO users VALUES( "${req.body.username}", "${hash}" );`;
	// db.query(sql, function(err,result){
	// 	if(err) throw err;
	// 	console.log("1 record inserted");
	// });

	// //res.send("User registered");
	// res.render('index', { title: 'Home', layout: 'in'});			// Should Log in to user and pass several ejs variables.

});

module.exports = router;
