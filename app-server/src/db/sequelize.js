const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("destiny_db", "destiny-user", "destiny-pass", {
  host: "localhost",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

module.exports = sequelize;
