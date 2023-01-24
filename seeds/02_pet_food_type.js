/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Carbs', description: 'Carbs for the animals'},
    {id: 2, name: 'Steaks', description: 'Gotta have the meats'},
    {id: 3, name: 'Veggies', description: 'Make sure they eat green!'}
  ]);
};
