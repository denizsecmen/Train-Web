import { Response, Request } from "express";
import { DataSource } from "typeorm";
import { Cart } from "../model/cart";
import { User } from "../model/user";
import { Item } from "../model/item";
import { hash } from 'bcrypt';
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
export default async function signUp(req: Request, res: Response) {
  try
  {
    let { name, password }: { name: string, password: string } = req.body;
    if (password.length < 6)
    {
      res.status(500).json({ mes: "Password must be longer than 5 charecters." });
    }
    else
    {
      if (password.match('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'))
      {
        let userDB =db.getRepository(User);
        let user = new User();
        user.name = name;
        user.password =await hash(password,10);
        let sameName = await userDB.find({ where: { name: name } });
        if (sameName.length==0)
        {
          console.log('Saving...')
          await userDB.save(user);
          res.status(200).send({ mes: "Ok" });
        }
        else
        {
          res.status(501).json({ mes: "User Already exsist.Please choose another name" });
        }
      }
      else
      {
        res.status(500).json({ mes: "Password must include as least 1 Big letter,symbol and number" });
      }
    }
  }
  catch (e)
  {
    res.json({mes:e});
  }
}