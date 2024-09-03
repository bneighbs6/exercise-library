/* Determines the current environment where app code is running & sotres the value in env variable
If process.env.NODE_ENV isn't defined, then set value to "development" */
const env = process.env.NODE_ENV || "development";
console.log(`Environment: ${env}`);

// Requires database configuration object from knexfile.js for current environment
const config = require("../../knexfile")[env];

console.log(`Config: ${JSON.stringify(config)}`);
console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

// Initializes a knex instance by called knex module, passing config as an argument
const knex = require("knex")(config);

module.exports = knex; 
