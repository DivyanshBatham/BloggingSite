var express = require('express');
var db = require('./../db.js');
var router = express.Router();

// Condition for Logged_in or not {

router.get('/', function(req, res, next) {

	//console.log( req.session , req.session.user );
	if( req.session && req.session.user )
	{
		var sql = `SELECT * FROM users WHERE username="${req.session.user.username}"`;
		console.log("Session Found!");
		db.query(sql, function(err,result){
			if(err) throw err;

			if(result.length === 0)
			{
				req.session.reset();
				res.redirect('/login');
			}
			else
			{
				res.locals.user = result[0] // or user ?
				res.render('newblog', { title: 'Newblog', layout: 'in'});
			}

		});
	}
	else
	{
		console.log("Session not Found!");
		res.redirect('/login');
	}
	//res.render('newblog', { title: 'Newblog'});
});

// }

module.exports = router;
