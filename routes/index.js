var express = require('express');
var router = express.Router();
var Author = require('../models/author');
var Book = require('../models/book');
var Author_Book = require('../models/author_book');

/* GET home page. */
router.get('/', function(req, res) {
  Book.forge().fetchAll()
  .then(function(books) {
    console.log(books.toJSON());
    res.render('index', {book:books.toJSON()});

    })
});

module.exports = router;
