import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Item } from "../model/item";
import { conf } from "../config/config";
import formidable from 'formidable';
import { readFileSync } from "fs";

// Initialize the database connection
const db = new DataSource(conf);

async function db_init() {
  try {
    await db.initialize();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
}

db_init();

export default async function item(req: Request, res: Response) {
  const form = formidable({});

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(500).json({ mes: "Server error while parsing form." });
    }
    const name = fields.name?.[0];
    const amount = fields.amount?.[0];
    const price = fields.price?.[0];
    const imageFile = files.image?.[0];
    if (!name || !amount || !price || !imageFile) {
      return res.status(400).json({ mes: "Please fill all areas." });
    }
    try {
      const item = new Item();
      item.name = name;
      item.amount = parseInt(amount, 10);
      item.price = parseInt(price, 10);
      const imageBuffer = readFileSync(imageFile.filepath);
      item.image = imageBuffer;
      const itemdb = db.getRepository(Item);
      await itemdb.save(item);

      res.status(200).json({ mes: "Item saved successfully." });
    } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ mes: "Error saving item." });
    }
  });
}
