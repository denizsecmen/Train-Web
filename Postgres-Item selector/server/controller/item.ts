import { conf } from "../config/config";
import { DataSource } from "typeorm";

let db = new DataSource(conf)