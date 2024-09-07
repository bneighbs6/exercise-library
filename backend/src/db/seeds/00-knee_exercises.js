/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

// Require knee exercise data
const kneeExercises = require("../exercise-data/kneeExercises");

exports.seed = async function(knex) {
  return knex
  .raw("TRUNCATE TABLE knee_exercises RESTART IDENTITY CASCADE") // Removes all rows from table; RESTART IDENTITY rests primary key values
  .then(function () {
    return knex("knee_exercises").insert(kneeExercises);
  });
};