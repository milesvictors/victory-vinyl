var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: root,
	password: '070707mavsecure',
	database: 'victory_vinyl'
});

module.exports = connection;