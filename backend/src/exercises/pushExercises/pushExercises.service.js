// Requires knex instance initialized in db/connection
const knex = require("../../db/connection");

// Selects a push exercise by its exerciseId
function read(exerciseId) {
    return knex("push_exercises").select("*").where({ exercise_id: exerciseId }).first(); 
}

// Selects all columns from push_exercises table
function list() {
    return knex("push_exercises").select("*");
}

module.exports = {
    read,
    list,
}