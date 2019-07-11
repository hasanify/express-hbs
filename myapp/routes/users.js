var express = require('express');
var router = express.Router();
var users = require('./users_list.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users', body: JSON.stringify(users)});
});

router.get('/:id', function(req, res, next) {
  current = users.filter(user => user.id == req.params.id);
  // res.send(current);
  if(current == ''){
  	res.render('error', {message: `User with id ${req.params.id} not found`});
  }
  else{
  // res.send(current);
  res.render('index', { title: JSON.stringify(current[0]['id']), 
  body: `This is user with id ${req.params.id}: <br>`+JSON.stringify(current)});
}
});

router.get('/u/:name', function(req, res, next) {
  current = users.filter(user => user.name.toLowerCase() == req.params.name.toLowerCase());
  if(current == ''){
  	res.render('error', {message: `User with name ${req.params.name} not found`});
  }
  else{
  // res.send(current);
  res.render('index', { title: JSON.stringify(current[0]['name']),
  body: `This is user with name ${req.params.name}: <br>`+JSON.stringify(current)});
}
});

module.exports = router;
