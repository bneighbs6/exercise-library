/* Determines current environment where application code is runnning & stores it in the env variable
If process.env.NODE_ENV isn't defined then set value to "development" */
const env = process.env.NODE_ENV || "development";

/* Requires database configuration object from knexfile for current environment & stores in config variable
Example, if env is set to "development", then config will be set to the development configuration object from knexfile */
const config = require("../../knexfile")[env];

// Initializes knex instance 
const knex = require("knex").config(); 

module.exports = knex; 