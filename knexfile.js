// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || 'postgresql://postgres@localhost';
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); 
      },
    },
    useNullAsDefault:true
  },



  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    useNullAsDefault:true 
  },

  production: {
    client: 'pg',
    connection:process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 20
    },

    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
