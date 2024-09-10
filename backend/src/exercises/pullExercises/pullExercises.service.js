const knex = require("../../db/connection");

// Creates a new pull exercise
function create(exercise) {
    return knex("pull_exercises")
    .insert(exercise)
    .returning("*")
    .then((createdExercise) => createdExercise[0]);
}

// Reads a pull exercise by its id
function read(exerciseId) {
    return knex("pull_exercises").select("*").where({ exercise_id: exerciseId }).first();
}

// Updates an exercise by its id
function update(updatedExercise) {
    return knex("pull_exercise")
    .select("*")
    .where({ exercise_id: updatedExercise.exercise_id })
    .update(updatedExercise, "*");
}

// Destroys a pull exercise by its id
function destroy(exercise_id) {
    return knex("pull_exercises").where({ exercise_id }).del(); 
}

// Lists all pull exercises
function list() {
    return knex("pull_exercises").select("*");
}

module.exports = {
    create,
    read,
    update,
    delete: destroy,
    list,
}