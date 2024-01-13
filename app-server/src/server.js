const appRoutes = require("./routes");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4040;

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/", appRoutes);

// Start the serever
app.listen(port, () => {
  console.log(`Destiny server has started on port ${port}`);
});
