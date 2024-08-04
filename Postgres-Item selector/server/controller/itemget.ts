import { DataSource } from "typeorm";
import { conf } from "../config/config";
import { Request, Response } from "express";
import { Item } from "../model/item";

const db = new DataSource(conf);

async function dbInit() {
  try {
    await db.initialize();
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database', error);
  }
}

dbInit();

export default async function itemAdd(req: Request, res: Response) {
  try {
    const repo = db.getRepository(Item);
    const data = await repo.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching items', error);
    res.status(500).json({ err: 'An error occurred while fetching items' });
  }
}

export { itemAdd };
