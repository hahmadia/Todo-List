import "module-alias/register";
import express from "express";
import { ItemController } from "@src/controllers";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await ItemController.getItems();
  res.send(data);
});

app.post("/", async (req, res) => {
  const item = req.body;
  console.log(item);
  const createdItem = await ItemController.createItem(item);
  res.send(createdItem);
});

app.put("/", async (req, res) => {
  const item = req.body;
  const updatedItem = await ItemController.updateItem(item);
  res.send(updatedItem);
});

app.delete("/", async (req, res) => {
  const { id } = req.body;
  const itemDeleted = await ItemController.deleteItem(id);
  res.send(itemDeleted);
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
