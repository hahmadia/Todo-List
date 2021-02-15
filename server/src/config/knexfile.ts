// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "",
      host: "localhost",
      port: 5432,
      database: "todo",
    },
    acquireConnectionTimeout: 2000,
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "",
      host: "localhost",
      port: 5432,
      database: "todo",
    },
    acquireConnectionTimeout: 2000,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
