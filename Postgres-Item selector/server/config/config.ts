import { User } from "../model/user";
import { Item } from "../model/item";
let conf:any= {
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
}
export { conf };