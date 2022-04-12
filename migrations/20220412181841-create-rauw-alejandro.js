'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rauw_alejandro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      realName: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      industryYears: {
        type: Sequelize.STRING
      },
      followings: {
        type: Sequelize.STRING
      },
      netWorth: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rauw_alejandro');
  }
};