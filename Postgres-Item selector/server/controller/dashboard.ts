import { Request, Response } from "express";
import { User } from "../model/user";
import { Item } from "../model/item";
import { DataSource } from "typeorm";
import { conf } from "../config/config";
let db = new DataSource(conf);
async function init_db() {
  await db.initialize();
}
init_db();
export default function dashboard(req: Request, res: Response) {
  let repo = db.getRepository(Item);
  if (req.name != undefined)
  {
    res.status(200).send({ mes: "Ok", name: req.name });
  }
}