import { Response, Request } from "express";
import { DataSource } from "typeorm";
import { Item } from "../model/item";
let db = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dgs1905.',
      database: 'Project(Cart)',
      synchronize: true,
      logging: false,
      entities: [Item],
      migrations: [],
      subscribers: [],
});
async function init_db() {
  await db.initialize();
}
init_db();
export default function main(req: Request, res: Response) {
  let itemDB = db.getRepository(Item);
  let data = itemDB.find();
}