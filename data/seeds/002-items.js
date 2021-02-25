
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_name: 'banana', location: 'Ghana', description: 'Yellow Fruit!', price: '$5', user_id: 1 },
        {item_name: 'plum', location: 'Ghana', description: 'Purple Fruit!', price: '$10', user_id: 1 },
        {item_name: 'apple', location: 'Ghana', description: 'Red Fruit!', price: '$7', user_id: 1 }
      ]);
    });
};
