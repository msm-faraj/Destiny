const express = require("express");
const pool = require("./db");
const cors = require("cors");
const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
