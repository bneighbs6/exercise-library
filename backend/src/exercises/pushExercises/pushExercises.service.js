// Requires knex instance initialized in db/connection
const knex = require("../../db/connection");

// Creates a new push exercise
function create(exercise) {
    return knex("push_exercises")
    .insert(exercise)
    .returning("*")
    .then((createdExercise) => createdExercise[0]);
}

// Selects a push exercise by its exerciseId
function read(exerciseId) {
    return knex("push_exercises").select("*").where({ exercise_id: exerciseId }).first(); 
}

// Updates an exercise by its id
function update(updatedExercise) {
    return knex("push_exercises")
    .select("*")
    .where({ exercise_id: updatedExercise.exercise_id })
    .update(updatedExercise, "*");
}

// Deletes an exercise by its id
function destroy(exercise_id) {
    return knex("push_exercises").where({ exercise_id }).del();
}

// Selects all columns from push_exercises table
function list() {
    return knex("push_exercises").select("*");
}

module.exports = {
    create,
    read,
    update,
    delete: destroy, 
    list,
}