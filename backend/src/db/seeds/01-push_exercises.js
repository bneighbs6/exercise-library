/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const pushExercises = require("../exercise-data/pushExercises");

exports.seed = async function(knex) {
  return knex
  .raw("TRUNCATE TABLE push_exercises RESTART IDENTITY CASCADE") // Removes all rows from table; RESTART IDENTITY resets primary key values
  .then(function () {
    return knex("push_exercises").insert(pushExercises);
  });
};
