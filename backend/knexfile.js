// Requires dotenv package and loads .env file
require("dotenv").config();

// Requires path package & store in path variable
const path = require("path");

const { DATABASE_URL } = process.env; 

module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"), // Tells knex where to store migration files
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"), // Tells knex where to store seeds files
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
