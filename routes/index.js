var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	// Session Exists:
	if( req.session && req.session.user )
		res.render('index', { title: 'Home', layout: 'in' });
	else
		res.render('index', { title: 'Home', layout: 'out' });
	
	// if( req.session && req.session.user )
	// 	res.locals.user = req.user;
	// res.render('index', { title: 'Home' });
});

module.exports = router;
