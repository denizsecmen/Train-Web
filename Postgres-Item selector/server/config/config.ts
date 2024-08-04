import { User } from "../model/user";
import { Item } from "../model/item";
let conf:any= {
     type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dgs1905.',
      database: 'Project(Cart)',
      synchronize: true,
      logging: false,
      entities: [User,Item],
      migrations: [],
      subscribers: [],
}
export { conf };