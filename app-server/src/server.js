const sequelize = require("../src/db/sequelize");

const Expense = require("../src/db/models/expense");
const Todo = require("../src/db/models/todo");

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
