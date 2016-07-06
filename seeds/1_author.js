exports.seed = function(knex, Promise) {
  return knex('author').del()
    .then(function () {
      return Promise.all([
        knex('author').insert({first_name: 'J.K.', last_name: 'Rowling'}),
        knex('author').insert({first_name: 'Diana', last_name: 'Galbadon'}),
        knex('author').insert({first_name: 'Kyle', last_name: 'Coberly'}),
        knex('author').insert({first_name: 'Danny', last_name: 'Fritz'})
      ]);
    });
};
