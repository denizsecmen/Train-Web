import { Request,Response } from "express";
import { verify } from "jsonwebtoken";
export default function auth(req:Request, res:Response) {
  try
  {
    let data = req.body['jwt-key'];
    let verified  = verify(data, 'key') as {iat:number,exp:number};
    if (verified.iat>verified.exp)
    {
      console.log("Expired token.");
      res.status(500).send({ mes: "Expired token" });
      return '';
    }
    res.status(200).send({ mes: "Ok" });
  }
  catch (e)
  {
    res.status(500).send({ mes: 'Key Malformed' });
  }
}