// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// Require dotenv library
require("dotenv").config(); 

// Define variable and store value of process.env.DATAUBASE_URL  
const { DATABASE_URL } = process.env; 

module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
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
