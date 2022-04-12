'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concerts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Concerts.belongsTo(models.Rauw_Alejandro, {
        foreignKey: 'location',
        as: 'concerts',
      onDelete: 'cascade',
      onUpdate: 'cascade'
      })
    }
  }
  Concerts.init({
    date: DataTypes.STRING,
    location: DataTypes.STRING,
    venueCap: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Concerts',
    tableName: 'concerts'
  });
  return Concerts;
};