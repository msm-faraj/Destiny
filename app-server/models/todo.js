"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init(
    {
      todoId: DataTypes.INTEGER,
      todoName: DataTypes.STRING,
      isDone: DataTypes.BOOLEAN,
      state: DataTypes.ENUM("work", "routine", "other"),
      isImortant: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "todo",
    }
  );
  return todo;
};
