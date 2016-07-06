var bookshelf = require('../db/bookshelf');

var Author = bookshelf.Model.extend({
  tableName: 'author',
  books: function() {
    return this.belongsToMany(Book).through('author_book');
  }
});

module.exports = bookshelf.model('Author', Author);
