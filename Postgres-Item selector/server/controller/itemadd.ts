import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Item } from "../model/item";
import { conf } from "../config/config";
let db = new DataSource(conf);
async function db_init() {
  await db.initialize();
} 

db_init();
export default async function item(req: Request, res: Response) {
  try
  {
    let reqbody = req.body;
    let itemdb = db.getMongoRepository(Item);
    let item = new Item();
    item.name = reqbody.name;
    item.amount = reqbody.amount;
    item.price = reqbody.price;
    item.image = reqbody.image;
    item.amount = reqbody.amount;
    itemdb.save(item);
  }
  catch (e)
  {
    console.log(e);
  }
}