'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert (
      'concerts',
      [
        {
          date: 'April 14th, 2022',
          location: 'Pechanga Arena San Diego, San Diego, CA, USA',
          venueCap: '16,100',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          date: 'April 15th, 2022',
          location: 'Save Mart Center, Fresno, CA, USA',
          venueCap: '16,182',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          date: 'April 16th, 2022',
          location: 'The Kia Forum, Inglewood, CA, USA',
          venueCap: '17,505',
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ]
    )
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('concerts', null,{})
  }
};
