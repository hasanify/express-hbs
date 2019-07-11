var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// ALL DATA
router.get('/', function(req, res, next) {
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
connection.connect();
connection.query('SELECT * FROM temp', function (err, rows, fields) {
  if (err) throw err
  	 var i = 0;
  	 var data = [];
  	 while(i < rows.length)
  	 {
      data[i] = rows[i];
      i++;
	 }
	 res.send(data);
})
connection.end()
});

// DATA BY ID
router.get('/:id', function(req, res, next) {
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
connection.connect();
connection.query(`SELECT * FROM temp WHERE id = ${req.params.id}`, function (err, rows, fields) {
  if (err) throw err
res.render('index', {title:  `Data by id ${req.params.id}`, body: JSON.stringify(rows[0])});
connection.end()
});
});
module.exports = router;
