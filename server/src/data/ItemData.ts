import db from "@src/config";

export interface Item {
  id: number;
  item: string;
}

class ItemData {
  public getItems = async () => {
    const items = (await db("items").select(["id", "item"])) as Item[];
    return items;
  };

  public createItem = async (item: Item) => {
    const itemCreated = await db("items")
      .insert(item)
      .returning(["id", "item"])
      .catch((err) => err);

    return itemCreated;
  };

  public updateItem = async (itemToUpdate: Item) => {
    const { id, item } = itemToUpdate;
    const itemUpdated = await db("items").where({ id }).update({ item }).returning(["id", "item"]);

    return itemUpdated;
  };

  public deleteItem = async (id: number) => {
    const numberOfItemsDeleted = await db("items").where({ id }).delete();

    return numberOfItemsDeleted == 1;
  };
}

export default new ItemData();
