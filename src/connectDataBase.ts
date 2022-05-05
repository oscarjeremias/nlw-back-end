import dotenv from "dotenv";
dotenv.config();
import mysql2 from "mysql2";

const database = process.env.DATABASE_URL;

export const connect = mysql2.createConnection(`${database}`);
