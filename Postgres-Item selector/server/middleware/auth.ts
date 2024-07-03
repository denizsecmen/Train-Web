import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';
export default function auth(req:Request, res:Response, next:NextFunction) {
  
  next();
}