import { Request, Response } from "express";
import { Cart } from "../model/cart";
import { User } from "../model/user";
import { Item } from "../model/item";
import { DataSource } from "typeorm";
let db = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dgs1905.',
      database: 'Project(Cart)',
      synchronize: true,
      logging: false,
      entities: [Cart,User,Item],
      migrations: [],
      subscribers: [],
});
async function init_db() {
  await db.initialize();
}
init_db();
export default function dashboard(req: Request, res: Response) {
  res.status(200).json({ mes: "Ok" });
}