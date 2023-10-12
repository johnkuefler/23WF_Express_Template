var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/help', function(req, res, next) {
    res.render('help', 
      {
        firstName: 'Jim',
        lastName: 'Smith',
        hobby: 'Fishing',
        pets: [
          {name: 'Spot', type: 'Dog'},
          {name: 'Fluffy', type: 'Cat'},
          {name: 'Goldie', type: 'Fish'},
          {name: 'Bubbles', type: 'Fish'}
        ]
      }
    )
});

module.exports = router;
