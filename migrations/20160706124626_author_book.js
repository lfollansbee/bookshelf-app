exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', function(table){
    table.integer('book_id').references('book.id')
    table.integer('author_id').references('author.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};
