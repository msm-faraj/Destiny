const { Pool } = require("pg");
const pool = new Pool({
  port: 5432,
  host: "app-postgres-cnt",
  user: "app-user",
  database: "app_db",
  password: "app-pass",
});

module.exports = pool;
