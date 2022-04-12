'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert (
      'songs',
      [
        {
          name: 'Todo De Ti',
          genre: 'Latin Urbano, Pop',
          totalViews: '501,254,661',
          releaseDate: 'May 20th, 2020',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: '2/Catorce',
          genre: 'Latin Urbano, Pop',
          totalViews: '359,098,661',
          releaseDate: 'February 13th, 2021',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          name: 'Desesperados',
          genre: 'Latin Urbano, Pop',
          totalViews: '174,317,359',
          releaseDate: 'December 9th, 2021',
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ]
    )
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('songs', null,{})
  }
};
