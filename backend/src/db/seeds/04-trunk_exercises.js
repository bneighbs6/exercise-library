/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const trunkExercises = require("../exercise-data/trunkExercises");

exports.seed = async function(knex) {
  return knex
  .raw("TRUNCATE TABLE trunk_exercises RESTART IDENTITY CASCADE") // Removes all rows from table; RESTART IDENTITY CASCADE resets primary key values
  .then(function () {
    return knex("trunk_exercises").insert(trunkExercises);
  });
};
