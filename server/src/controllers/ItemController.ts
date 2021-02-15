import { ItemData } from "@src/data";
import { Item } from "@src/data/ItemData";

class ItemController {
  public getItems = async () => {
    const data: Item[] = await ItemData.getItems();
    return data;
  };

  public createItem = async (item: Item) => {
    const createdItem = await ItemData.createItem(item);
    return createdItem;
  };

  public updateItem = async (item: Item) => {
    const updatedItem = await ItemData.updateItem(item);

    return updatedItem;
  };

  public deleteItem = async (id: string) => {
    const itemDeleted = await ItemData.deleteItem(id);

    return itemDeleted;
  };
}

export default new ItemController();
