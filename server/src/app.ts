import "module-alias/register";
import express from "express";
import { TaskController } from "@src/controllers";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await TaskController.getTasks();
  res.send(data[0].email);
});

app.post("/", (req, res) => {
  res.send("Hello Worldposstsadffds");
});

app.delete("/", (req, res) => {
  res.send("Hello Worlsdfdsfddelte");
});

app.put("/", (req, res) => {
  res.send("Hello Worldput111");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
