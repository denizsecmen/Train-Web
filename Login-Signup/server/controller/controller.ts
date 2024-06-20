import { Request, Response } from 'express';
import { compare, hash } from 'bcrypt';
import { User } from '../model/model';
import { DataSource } from 'typeorm';
import {sign} from 'jsonwebtoken';
let db = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '<your_password>',
      database: '<your db name>',
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
});
async function init_db() {
  await db.initialize();
}
init_db();
export async function signUp(req: Request, res: Response) {
  let data: { name: string; password: string } = req.body;
  console.log(req.body);
  try
  {
    if (
      data.password.length > 6 &&
      !data.password.match('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')
    )
    {
      let user:User = new User();
      let passwordHashed = await hash(data.password, 10);
      let userDb = db.getRepository(User);
      user.name = data.name;
      user.password = passwordHashed;
      let sameData: { id: number, name: string, password: string } | null = await userDb.findOne({ where: { name: user.name } });
      console.log(sameData);
      if (sameData === null)
      {
        userDb.save(user);
        console.log("Added");
        res.status(200).send({ mes: 'Ok' });
      }
      else
      {
        res.status(501).send({ mes: "Username already" })
        return '';
      }
    }
    else
    {
      res.status(501).send({
        mes: 'Password must be longer than 6 charecter and must include number and non alhanumeric charecter.',
      });
      return '';
    }
  }
  catch (e)
  {
    console.log(e);
    res.status(501).send({
      mes:e,
    })
  }
}
export async function logIn(req: Request, res: Response) {
  try
  {
    let data:{name:string,password:string} = req.body;
    if (data.name !== undefined && data.password !== undefined)
    {
      let user: User = new User();
      let reqUserData: { name: string, password: string } = data;
      console.log(reqUserData);
      let userDb = db.getRepository(User);
      let loginData: null | { id: number, name: string, password: string } = await userDb.findOne({ where: { name: reqUserData.name } });
      if (loginData != null)
      {
        let checkPassword = await compare(reqUserData.password, loginData.password);
        if (!checkPassword)
        {
          res.status(501).send({ mes:"Password or name is incorrect."});
        }
        else
        {
          let signedData = sign(reqUserData, 'key',{expiresIn:'20s'});
          res.status(200).send({cookie:{"jwt-key":signedData}, mes: 'Ok' });
          return '';
        }
        
      }
      else
      {
        res.status(501).send({ mes:"Password or name is incorrect."});
      }
    }
    else
    {
      res.status(200).send({ mes: 'Please fill name and password secitions!' });
    }
  }
  catch (e)
  {
    res.status(501).send({
      mes:"sdadsds",
    })
  }
}
