var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Author = require('../models/author');
var Author_Book = require('../models/author_book');

/* GET home page. */
router.get('/', function(request, response, next) {
  Book.forge().fetchAll({ withRelated: 'authors' }).then(function(books) {
    console.log(books.toJSON());
    response.render('index', { book: books.toJSON() });
  });
});

module.exports = router;
