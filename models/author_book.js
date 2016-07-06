var bookshelf = require('../db/bookshelf');

var Author_Book = bookshelf.Model.extend({
  tableName: 'author_book',
  author: function () {
    return this.hasMany('book')
  },
  book: function () {
    return this.hasMany('author')
  }
});

module.exports = bookshelf.model('Author_Book', Author_Book);
