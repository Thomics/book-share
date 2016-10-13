
//http routing framework
var express = require('express');
//A Router instance is a complete middleware and routing system
var router = express.Router();

var ctrlChat = require('../chat/index');


router.get('/', ctrlChat.getChat);


module.exports = router;
