
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Austin', password: 'password', role: 'owner'},
        {username: 'Hamida', password: 'password1', role: 'owner'},
        {username: 'Jonathan', password: 'password2', role: 'owner'}
      ]);
    });
};
