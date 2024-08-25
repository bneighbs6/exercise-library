const knex = require("../db/connection");

function list() {
    return knex("knee_exercises").select("*");
}

module.exports = {
    list, 
}