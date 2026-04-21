import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;
if (!DATABASE_CONNECTION_STRING) {
  throw new Error("DATABASE_CONNECTION_STRING is not defined");
}
export const SQL = neon(DATABASE_CONNECTION_STRING);
