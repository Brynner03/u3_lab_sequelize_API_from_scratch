'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert (
      'rauw_alejandro',
      [
        {
         realName: 'Raúl Alejandro Ocasio Ruiz',
         nationality: 'Puerto-Rican',
         industryYears: '8',
         followings: '13.8 Million',
         netWorth: '$15 Million',
         createdAt: new Date(),
         updatedAt: new Date()

        }
      ]
    )
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rauw_alejandro', null,{})
  }
};
