const knex = require("../../db/connection");

// Creates a new exercise
function create(exercise) {
    return knex("knee_exercises")
    .insert(exercise)
    .returning("*")
    .then((createdExercise) => createdExercise[0]);
}

// Lists a knee exercise by its exercise_id
function read(exerciseId) {
    return knex("knee_exercises").select("*").where({ exercise_id: exerciseId }).first();
}

// Lists all knee exercises
function list() {
    return knex("knee_exercises").select("*");
}
 
module.exports = {
    create,
    read,
    list, 
}