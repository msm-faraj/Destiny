const Sequelize = require("sequelize");
const sequelize = require("../dbConnection");

const Expense = sequelize.define("expence", {
  expenseId: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DataTypes.DATE,
    allowNull: false,
  },
  account: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: Sequelize.DataTypes.STRING,
  },
  deletedAt: {
    type: Sequelize.DataTypes.DATE,
  },
});

module.exports = Expense;
