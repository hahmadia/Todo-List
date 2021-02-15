import { QueryBuilder } from "knex";
import PostgresProvider from "@src/config";

export interface Task {
  customer_id: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
}

class TaskData {
  private tasks: QueryBuilder;

  constructor() {
    this.tasks = PostgresProvider().table("customer");
  }

  public getTasks = async () => {
    const tasks = (await this.tasks.select("*")) as Task[];
    return tasks;
  };
}

export default new TaskData();
