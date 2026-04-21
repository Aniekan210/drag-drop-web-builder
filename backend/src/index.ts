import express from "express";
import { SQL } from "./helpers/db";

const app = express();
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
