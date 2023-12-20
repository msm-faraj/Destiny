const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: 5000,
  user: "app-user",
  password: "app-pass",
  database: "app-db",
});

module.exports = pool;
