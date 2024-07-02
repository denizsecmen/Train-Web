import { Response, Request } from "express";
import { DataSource } from "typeorm";
import { Cart } from "../model/cart";
import { User } from "../model/user";
import { Item } from "../model/item";
import { createConnection, } from "net";
let db = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '<your_password>',
      database: '<your db name>',
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
export default async function signUp(req: Request, res: Response) {
  const conn = db.getRepository(User);
}