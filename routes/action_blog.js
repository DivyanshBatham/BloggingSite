var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.post('/', function(req, res, next) {

	console.log('req.body');
	console.log(req.body);

	var sql = `INSERT INTO blogs(title,content,author) VALUES( "${req.body.title}", "${req.body.content}", "${req.body.author}" );`;
	db.query(sql, function(err,result){
		if(err) throw err;
		console.log("1 record inserted");
	});

	//res.send("User registered");
	res.render('blogs', { title: 'Blogs'});		
});

// // This should be an illegal move : What to do?
// router.get('/', function(req, res, next) {
// 	res.send("User registered");
// });

module.exports = router;
