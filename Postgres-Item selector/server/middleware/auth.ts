import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';
declare module 'express' {
    interface Request {
        name?: string; 
    }
}
export default async function auth(req: Request, res: Response, next: NextFunction) {
  try
  {
    console.log(req.body);
    let data = req.body['jwt-key'];
    console.log(data);
    let verified: any = verify(data, 'Test');
    console.log(verified);
    if (verified.iat > verified.exp)
    {
      console.log("Expired token.");
      res.status(500).send({ mes: "Expired token" });
      return '';
    }
    req.name = verified.name;
  }
  catch (e)
  {
    console.log(e);
    res.status(500).json({ mes: "Key malformed" });
  }
  finally
  {
    next();
  }
}