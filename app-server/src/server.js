const express = require("express");
const app = express();
const port = 4040;
const cors = require("cors");
const sequelize = require("../src/db/dbConnection");

// ***
app.use(express.json());
app.use(cors());

// ***
app.get("/", (req, res) => {
  res.send("Hello Destiny");
});

// ** test connection
const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectionTest();

// ** create serever
app.listen(port, () => {
  console.log(`Destiny server is listening on port ${port}`);
});
