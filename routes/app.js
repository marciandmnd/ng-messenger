var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
  User.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error');
    }
    res.render('index', {email: doc.email});
  });
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var user = new User({
    firstName: 'Max',
    lastName: 'Scwarz',
    password: 'password',
    email: email
  });

  user.save(function(){

  });

  res.redirect('/');
});
module.exports = router;
