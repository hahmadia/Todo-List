import { TaskData } from "@src/data";
import { Task } from "@src/data/TaskData";

class TaskController {
  public getTasks = async () => {
    const data: Task[] = await TaskData.getTasks();
    return data;
  };
}

export default new TaskController();
