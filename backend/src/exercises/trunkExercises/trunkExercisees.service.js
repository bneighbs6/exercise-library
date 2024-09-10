// TODO: Create service functions

const knex = require("../../db/connection");

// Creates a new trunk exercise
function create(exercise) {
    return knex("trunk_exercises")
    .insert(exercise)
    .returning("*")
    .then((createdExercise) => createdExercise[0]);
}

// Reads a trunk exercise by its id
function read(exerciseId) {
    return knex("trunk_exercises")
    .select("*")
    .where({ exercise_id: exerciseId })
    .first(); 
}

// Updates an exercise by its id
function update(udatedExercise) {
    return knex("trunk_exercises")
    .select("*")
    .where({ exercise_id: updatedExercise.exercise_id })
    .update(updatedExercise, "*");
}

// Deletes an exercise by its id
function destroy(exercise_id) {
    return knex("trunk_exercises").where({ exercise_id }).del(); 
}

// Selects all columns from trunk_exercises table
function list() {
    return knex("trunk_exercises").select("*");
}

module.exports = {
    create,
    read,
    update,
    delete: destroy,
    list, 
}