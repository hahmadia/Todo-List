import express, { Response, Request } from "express";
import { body, param, validationResult } from "express-validator";
import { ItemController } from "@src/controllers";
import { CreateItem } from "@src/types/ItemTypes";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const data = await ItemController.getItems();
  res.send(data);
});

router.post(
  "/",
  body("item")
    .isString()
    .withMessage("Must be a string")
    .isLength({ max: 255 })
    .withMessage("Cannot be more than 255 characters in length"),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).json({ errors: errors.array() });
    }

    const item: CreateItem = {
      item: req.body.item as string,
    };
    const createdItem = await ItemController.createItem(item);
    res.send(createdItem);
  }
);

router.put(
  "/:id",
  param("id")
    .isNumeric({ no_symbols: true })
    .withMessage("Must a be a numeric value")
    .exists()
    .withMessage("Must pass an id into the query params"),
  body("item")
    .isString()
    .withMessage("Must be a string")
    .isLength({ max: 255 })
    .withMessage("Cannot be more than 255 characters in length"),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const item = {
      item: req.body.item as string,
      id,
    };
    const updatedItem = await ItemController.updateItem(item);
    res.send(updatedItem);
  }
);

router.delete(
  "/:id",
  param("id")
    .exists()
    .withMessage("Must exist")
    .isNumeric({ no_symbols: true })
    .withMessage("Must a be a numeric value"),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const itemDeleted = await ItemController.deleteItem(id);
    res.send(itemDeleted);
  }
);

export default router;
