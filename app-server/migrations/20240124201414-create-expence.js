"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("expences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      account: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.DATE,
      },
      category: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.REAL,
      },
      note: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("expences");
  },
};
