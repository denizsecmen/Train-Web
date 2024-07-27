import { Response, Request } from "express";
import { compare } from "bcrypt";
import { DataSource } from "typeorm";
import { Cart } from "../model/cart";
import { User } from "../model/user";
import { Item } from "../model/item";
import { sign } from "jsonwebtoken";
import { conf } from "../config/config";
let db = new DataSource(conf);
async function init_db() {
  await db.initialize();
}
init_db();
export default async function login(req: Request, res: Response) {
  try
  {
    let { userName, password }: { userName: string, password: string } = req.body;
    let userDB = db.getRepository(User);
    let userList = await userDB.find({ where: { name: userName } });
    console.log(req.body);
    if (userList.length == 0)
    {
      res.status(500).json({ mes: "Password or Username incorrect." });
    }
    else
    {
      let compres: boolean = await compare(password, userList[0].password);
      console.log(compres);
      if (compres)
      {
        try
        {

          let signedData = sign({name:userName },"Test", { expiresIn: '5m' });
          res.status(200).json({ mes: "Ok",jwtKey:signedData });
        }
        catch (e)
        {
          console.log(e);
        }
      }
      else
      {
        res.status(500).json({ mes: "Password or Username incorrect." });
      }
    }
  }
  catch (e)
  {
    res.status(500).json({ mes: e });
  }
}