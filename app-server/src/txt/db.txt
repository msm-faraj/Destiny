const { Pool } = require("pg");
const pool = new Pool({
  port: 5432,
  host: "destiny-postgres-cnt",
  user: "destiny-user",
  database: "destiny_db",
  password: "destiny-pass",
});

module.exports = pool;
