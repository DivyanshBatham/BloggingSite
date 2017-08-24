var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.get('/', function(req, res, next) {

		// Session Exists:
	if( req.session && req.session.user )
		res.render('login', { title: 'Login', error:'', layout: 'in' });
	else
		res.render('login', { title: 'Login', error:'', layout: 'out' });

	//res.render('login', { title: 'Login', error:''});
});

router.post('/', function(req, res, next) {

	var sql = `SELECT * FROM users WHERE username="${req.body.username}"`;
	var password;
	db.query(sql, function(err,result){
		if(err) throw err;
		//console.log(result, result.length);
		if(result.length === 0)
		{
			res.render('login', { title: 'Login', error: 'No such user found', layout: 'out'});
		}
		else
		{
			// if( bcrypt.compareSync(req.body.password, result[0].password ) )
			if( req.body.password === result[0].password )
			{
  			    // sets a cookie with the user's info
  			    req.session.user = result[0];	// set-header Cookie: session={username:'...', password:'...'}
				//console.log("Successful Login", result, result[0]);
				//res.send("Successful Login");
				res.redirect('/newblog');
			}
			else
				res.render('login', { title: 'Login', error: 'Invalid username or password', layout: 'out'});
		}
		
		res.render('users', { title: 'Users', user_list: result, layout: 'in' });
	});

//	res.json(req.body);		Just for preview
  
});

module.exports = router;
