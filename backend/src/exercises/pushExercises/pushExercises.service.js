// Requires knex instance initialized in db/connection
const knex = require("../../db/connection");

// Selects all columns from push_exercises table
function list() {
    return knex("push_exercises").select("*");
}

module.exports = {
    list,
}