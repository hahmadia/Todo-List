import Knex from "knex";

// const create = async () => {
//   const knex =
//   try {
//     await knex.raw("SELECT now()");
//     console.log("Connected to Postgres Database");
//     return knex;
//   } catch (err) {
//     throw new Error(`Unable to connect to postgres database: ${err}`);
//   }
// };

export default Knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "dvdrental",
  },
  acquireConnectionTimeout: 2000,
});
