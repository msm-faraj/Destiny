const express = require("express");
const pool = require("./db");
const port = 4000;

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
