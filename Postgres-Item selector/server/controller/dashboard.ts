import { Request, Response } from "express";
import { User } from "../model/user";
import { Item } from "../model/item";
import { DataSource } from "typeorm";
let db = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '<password>',
      database: 'Project(Cart)',
      synchronize: true,
      logging: false,
      entities: [User,Item],
      migrations: [],
      subscribers: [],
});
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