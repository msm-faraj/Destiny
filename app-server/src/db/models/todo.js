const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const Todo = sequelize.define("todo", {
  todoId: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  todoName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: Sequelize.DataTypes.BOOLEAN,
  },
  isImportant: {
    type: Sequelize.DataTypes.BOOLEAN,
  },

  deletedAt: {
    type: Sequelize.DataTypes.DATE,
  },
});

module.exports = Todo;
