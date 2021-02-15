import Knex from "knex";
const config = require("./knexfile");

const knex = Knex(config);

const create = async () => {
  try {
    await knex.raw("SELECT now()");
    console.log("Connected to Postgres Database");
  } catch (err) {
    throw new Error(`Unable to connect to postgres database: ${err}`);
  }
};

create();

export default knex;
