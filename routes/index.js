var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll({
    attributes:['id']
  }).then(users=>{
    let title =users.map(i=>i.id).join(',')
    res.render('index', { title:title });
  })

});

module.exports = router;
