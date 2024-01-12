// const sequelize = require("./db/db");
const appRoutes = require("./routes");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4040;

// *** middleware
app.use(express.json());
app.use(cors());

// *** router
app.use("/", appRoutes);

// *** create serever
app.listen(port, () => {
  console.log(`Destiny server is listening on port ${port}`);
});
