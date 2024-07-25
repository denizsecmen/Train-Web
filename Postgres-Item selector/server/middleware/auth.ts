import { error } from "console";
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
    req.name = verified.name;
    if (verified.iat > verified.exp)
    {
      throw new Error("Key Expired");
    }
  }
  catch (e)
  {
    res.status(500).json({ mes: "Key malformed or key expired." });
  }
  finally
  {
    next();
  }
}