"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class expence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  expence.init(
    {
      account: DataTypes.STRING,
      time: DataTypes.DATE,
      category: DataTypes.STRING,
      amount: DataTypes.REAL,
      note: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "expence",
    }
  );
  return expence;
};
