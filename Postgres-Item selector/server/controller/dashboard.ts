import { Request,Response } from "express";
export default function dashboard(req: Request, res: Response) {
  res.status(200).json({ mes: "Ok" });
}