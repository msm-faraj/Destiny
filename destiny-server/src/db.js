const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: 5000,
  user: "destiny-user",
  password: "destiny-pass",
  database: "destiny-db",
});

module.exports = pool;
