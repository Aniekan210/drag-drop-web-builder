import "dotenv/config";
import express from "express";
import { neon } from "@neondatabase/serverless";

const app = express();
const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;

if (!DATABASE_CONNECTION_STRING) {
  throw new Error("DATABASE_CONNECTION_STRING is not defined");
}
export const SQL = neon(DATABASE_CONNECTION_STRING);

// BOILERPLATE REQUEST HANDLER
app.get("/", async (req, res) => {
  try {
    const result = await SQL`SELECT version()`;
    const version = result[0]?.version;

    res.send(`Hello TypeScript Express\nDB: ${version}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});


app.listen(8080, () => {
  console.log("Server running on port 8080");
});
