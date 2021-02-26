
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

//need to make knex migrations, review schema
// next steps
//1. create routes and model files (done)
//2. test to make sure it works (done)
//3. deploy to heroku
//4. send off endpoints and data to front end
//5. write tests
