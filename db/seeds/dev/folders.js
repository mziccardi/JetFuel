exports.seed = function(knex, Promise) {
  return knex('folders').del()
  .then(() => {
    return Promise.all([
      knex('folders').insert({
        name: 'travel',
        created_at: new Date
      }),
      knex('folders').insert({
        name: 'animals',
        created_at: new Date
      })
    ]);
  });
};
