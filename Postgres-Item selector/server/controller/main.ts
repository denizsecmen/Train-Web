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
export default async function main(req: Request, res: Response) {
  let repo = db.getRepository(Item);
  let data =await repo.find();
  console.log(data);
  res.status(200).json({ mes: "Ok" ,items:data});
}