import express from "express";
import { ItemController } from "@src/controllers";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await ItemController.getItems();
  res.send(data);
});

router.post("/", async (req, res) => {
  const item = req.body;
  const createdItem = await ItemController.createItem(item);
  res.send(createdItem);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const item = {
    item: req.body.item,
    id,
  };
  const updatedItem = await ItemController.updateItem(item);
  res.send(updatedItem);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const itemDeleted = await ItemController.deleteItem(id);
  res.send(itemDeleted);
});

export default router;
