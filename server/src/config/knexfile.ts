// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
  },
  acquireConnectionTimeout: 2000,
  migrations: {
    tableName: "knex_migrations",
  },
};
