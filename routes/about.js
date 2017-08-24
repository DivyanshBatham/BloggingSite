var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {

	// Session Exists:
	if( req.session && req.session.user )
		res.render('about', { title: 'About', layout: 'in' });
	else
		res.render('about', { title: 'About', layout: 'out' });
	

  //res.render('about', { title: 'About' });
});

module.exports = router;
