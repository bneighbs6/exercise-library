const knex = require("../../db/connection");

// Creates new exercise
function create(exercise) {
  return knex("hip_exercises")
    .insert(exercise)
    .returning("*")
    .then((createdExercise) => createdExercise[0]);
}

// Reads exercise by its id
function read(exerciseId) {
  return knex("hip_exercises")
    .select("*")
    .where({ exercise_id: exerciseId })
    .first();
}

// Updates exercise by its id
function update(updatedExercise) {
  return knex("hip_exercises")
    .select("*")
    .where({ exericse_id: updatedExercise.exercise_id })
    .update(updatedExercise, "*");
}

// Deletes an exercise by its id
function destroy(exercise_id) {
  return knex("hip_exercises").where({ exericse_id }).del();
}

function list() {
  return knex("hip_exercises").select("*");
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
  list,
};
