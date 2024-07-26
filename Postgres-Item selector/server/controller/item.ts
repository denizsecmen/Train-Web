import { Item } from "../model/item";
import { DataSource } from "typeorm";

let db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Dgs1905.",
  
});