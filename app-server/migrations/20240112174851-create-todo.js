"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      todoId: {
        type: Sequelize.INTEGER,
      },
      todoName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      isDone: {
        type: Sequelize.BOOLEAN,
      },
      state: {
        type: Sequelize.ENUM("work", "routine", "other"),
        defaultValue: "work",
      },
      isImortant: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("todos");
  },
};
