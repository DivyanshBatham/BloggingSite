var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */	
router.get('/', function(req, res, next) {

    var sql = "SELECT * FROM blogs";
    db.query(sql, function(err,result){
        if(err) throw err;
        //console.log(result);

        // Session Exists:
        if( req.session && req.session.user )
          res.render('blogs', { title: 'Blogs', posts: result, layout: 'in' });
        else
          res.render('blogs', { title: 'Blogs', posts: result, layout: 'out' });
  
        //res.render('blogs', { title: 'Blogs', posts: result });
    });

/*
	var results = [];
	var sql = "SELECT * FROM users";
	db.query(sql, function(err,result){
		if(err) throw err;
		results.push(result);
		console.log(result);
		console.log("Inside " , results);	
	});
	console.log("Outside " , results);

 */
 	// let blogPosts = [
  //       {
  //           title: 'Each One Teach One',
  //           body: 'Adult education is essential for Democracy of India. The number of grown up illiterates is great. All college and senior School students should come forward to visit villages in the summer vacation. Each one will teach one there. This will remove illiteracy and strengthen our democracy.',
  //           author: 'Aaron Larner',
  //           publishedAt: new Date('2016-03-19'),
  //           createdAt: new Date('2016-03-19')
  //       },
  //       {
  //           title: 'The Stampede at Wankhade Stadium',
  //           body: 'I happened to see a one day cricket match between Pakistan and Australia at Wankhade Stadium, Mumbai. I went for a fun. But I wit­nessed a horrible sight. Two thousand ticketless cricket fans gate crashed. There was a stampede. Three persons died and twenty were injured. Administration was responsible for it.',
  //           author: 'Aaron Larner',
  //           publishedAt: new Date('2016-03-18'),
  //           createdAt: new Date('2016-03-18')
  //       },
  //       {
  //           title: 'Anti Pollution Drive',
  //           body: 'City Anti-pollution Drive demands certain steps from all the citi­zens of ABC city. All house-holders should pack the waste in a plastic bag and put the bag in front of their house. The bag will be replaced with an empty bag by the Municipal van every morning. They should maintain the cleanliness of the city. This will make the city pollution free.',
  //           author: 'Aaron Larner',
  //           publishedAt: new Date('2016-03-17'),
  //           createdAt: new Date('2016-03-17')
  //       }
  //   ];
  //   res.render('blogs', { title: 'Blogs', posts: blogPosts });
});

module.exports = router;
