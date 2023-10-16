var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create-todo', function(req, res, next) {
  if (req.body.todoTitle === '' || req.body.todoDescription === '') {
    res.send('Invalid request');
  }

  console.log(req.body.todoTitle.toUpperCase());
  console.log(req.body.todoDescription.toUpperCase());

  // save the todo data to a database

  res.render('todo-created', {title: req.body.todoTitle.toUpperCase()});
});

router.post('/submit-patient', (req, res) => {
  console.log(req.body);
  res.send('Data received.');
});

module.exports = router;
