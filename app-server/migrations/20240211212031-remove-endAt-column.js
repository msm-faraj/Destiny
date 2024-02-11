"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Removing endAt column to rename it to endedAt
    await queryInterface.removeColumn("tasks", "endAt");
  },

  async down(queryInterface, Sequelize) {
    // Creating endAt column
    // await queryInterface.addColumn("tasks", "endAt", {
    //   type: Sequelize.STRING,
    // });
  },
};
