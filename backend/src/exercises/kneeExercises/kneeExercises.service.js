const knex = require("../../db/connection");

// Lists a knee exercise by its exercise_id
function read(exerciseId) {
    return knex("knee_exercises").select("*").where({ exercise_id: exerciseId }).first();
}

// Lists all knee exercises
function list() {
    return knex("knee_exercises").select("*");
}
 
module.exports = {
    read,
    list, 
}