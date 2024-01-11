const express = require("express");
const app = express();
const port = 4040;
const cors = require("cors");
const { Sequelize } = require("sequelize");

// ***
app.use(express.json());
app.use(cors());

// ***
app.get("/", (req, res) => {
  res.send("Hello Destiny");
});

//** connect to da db
const sequelize = new Sequelize("destiny_db", "destiny-user", "destiny-pass", {
  host: "destiny-postgres-cnt", //**
  dialect: "postgres",
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
