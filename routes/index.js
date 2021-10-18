var express = require('express');
const {User} = require('../models');
const {Op} = require("sequelize");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  User.update({
   firstName:'test'
  },{
    where:{
      id:{
        [Op.gte]:500
      }
    }
  }).then(()=>{
    res.render('index', { title: 'dsa' });
  })



});

module.exports = router;
