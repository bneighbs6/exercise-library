/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const pullExercises = require("../exercise-data/pullExercises");

exports.seed = async function(knex) {
  return knex 
  .raw("TRUNCATE TABLE pull_exercises RESTART IDENTITY CASCADE") // Removes all rows from table; RESTART IDENTITY resets primary key values
  .then(function () {
    return knex("pull_exercises").insert(pullExercises);
  });
};
