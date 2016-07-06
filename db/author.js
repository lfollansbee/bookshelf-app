var Book = bookshelf.Model.extend({
  tableName: 'books',
  authors: function() {
    return this.belongsToMany(Author);
  }
});

var Author = bookshelf.Model.extend({
  tableName: 'authors',
  books: function() {
    return this.belongsToMany(Book);
  }
});
