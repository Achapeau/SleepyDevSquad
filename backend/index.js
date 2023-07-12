const express = require("express");
require("dotenv").config();
const mysql = require("mysql2/promise");

const { APP_PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } =
  process.env;

const app = require("./src/app");

const port = parseInt(APP_PORT ?? "8000", 10);

app.use(express.json());

const createPoolInstance = () => {
  try {
    const pool = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      waitForConnections: true,
    });
    return pool;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
const pool = createPoolInstance();

app.get("/vehicules", async (req, res) => {
  const sql = "SELECT * FROM vehicules;";

  try {
    const [vehicules] = await pool.query(sql);
    res.send(vehicules);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
