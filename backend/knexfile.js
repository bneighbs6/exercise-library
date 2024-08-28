// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Require path
const path = require("path");

// Require dotenv library
require("dotenv").config(); 

// Define variable and store value of process.env.DATAUBASE_URL  
const { 
  DATABASE_URL = "postgresql://exercise-library-backend_owner:QmPth6yaMZi5@ep-dry-river-a6qmwg3k.us-west-2.aws.neon.tech/exercise-library-backend?sslmode=require" 
} = process.env; 

module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"), // Defines where to store migration files
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"), // Defines where to store seed files
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
