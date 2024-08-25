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

// Updates a knee exercise by exercise_id
function update(updatedExercise) {
    return knex("knee_exercises")
      .select("*")
      .where({ exercise_id: updatedExercise.exercise_id })
      .update(updatedExercise, "*");
  }

// Deletes a knee exercise by its exercise id
function destroy(exercise_id) {
    return knex("knee_exercises").where({ exercise_id }).del();
}

// Lists all knee exercises
function list() {
    return knex("knee_exercises").select("*");
}
 
module.exports = {
    create,
    read,
    update,
    delete: destroy,
    list, 
}