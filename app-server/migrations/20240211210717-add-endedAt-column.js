"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Creating endedAt column
    // await queryInterface.addColumn("tasks", "endedAt", {
    //   type: Sequelize.STRING,
    // });
  },

  async down(queryInterface, Sequelize) {
    // Removing endAt column to rename it to endedAt
    // await queryInterface.removeColumn("tasks", "endedAt");
  },
};
