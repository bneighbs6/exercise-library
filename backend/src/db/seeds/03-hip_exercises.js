/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const hipExercises = require("../exercise-data/hipExercises");

exports.seed = async function(knex) {
  return knex
  .raw("TRUNCATE TABLE hip_exercises RESTART IDENTITY CASCADE")
  .then(function () {
    return knex("hip_exercises").insert(hipExercises);
  });
};
