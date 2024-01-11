const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("destiny_db", "destiny-user", "destiny-pass", {
  host: "destiny-postgres-cnt",
  dialect: "postgres",
});

module.exports = sequelize;
