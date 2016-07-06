exports.seed = function(knex, Promise) {
  return knex('book').del()
    .then(function () {
      return Promise.all([
        knex('book').insert({title: 'Harry Potter and the Sorcerer\'s Stone', description: 'You\'re a wizard Harry'}),
        knex('book').insert({title: 'Harry Potter and the Order of the Phoenix', description: 'Harry is going through puberty.'}),
        knex('book').insert({title: 'Harry Potter and the Deathly Hallows', description: 'Harry finally wins.'}),
        knex('book').insert({title: 'Outlander', description: 'Time traveling romance'}),
        knex('book').insert({title: 'Galvanize-Eats', description: 'First Quarter Assessment'}),
        knex('book').insert({title: 'Galvanize-Reads', description: 'Second Quarter Assessment'})
      ]);
    });
};
