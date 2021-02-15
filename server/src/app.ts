import "module-alias/register";
import express from "express";
import { ItemRoute } from "@src/routes";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/items", ItemRoute);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
