var mysql = require('mysql');

// Connection Parameters :
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "blogging_site"
});

// Creating connection to MySQL :
con.connect(function(err){
	if( err ) 
		throw err;
	else
		console.log("Connected to mysql!");
});

module.exports = con;
