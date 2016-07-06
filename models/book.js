var bookshelf = require('../db/bookshelf');
require('./author');

var Book = bookshelf.Model.extend({
  tableName: 'book',
  authors: function() {
    return this.belongsToMany(Author).through('author_book');
  }
});

module.exports = bookshelf.model('Book', Book);
