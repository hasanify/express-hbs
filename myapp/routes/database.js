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

// DATA INSERT
router.get('/insert', function(req, res, next) {
  res.render('insert', {title: 'Insert Data'});
});

// DATA BY ID
router.get('/:id', function(req, res, next) {
  if(isNaN(req.params.id))
  {
    res.send('invalid request');
  }
  else{
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });
  connection.connect();
  connection.query(`SELECT * FROM temp WHERE id = ${req.params.id}`, function (err, rows, fields) {
    if (err) throw err
      if(rows.length > 0)
      {
        res.render('index', {title:  `Data for id ${req.params.id}`, body: JSON.stringify(rows[0])});
      }
      else{
        res.render('error', {title:  `Data for id ${req.params.id}`, message: `There is no data for id ${req.params.id}`});
      }
      connection.end()
    });
}
});

// Export router
module.exports = router;
