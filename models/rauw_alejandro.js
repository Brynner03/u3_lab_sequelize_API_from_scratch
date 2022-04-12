'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rauw_Alejandro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rauw_Alejandro.hasMany(models.Concerts, {
        foreignKey: 'location',
        as: 'concerts',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Rauw_Alejandro.hasMany(models.songs, {
        foreignKey: 'name',
        as: 'songs',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Rauw_Alejandro.init({
    realName: DataTypes.STRING,
    nationality: DataTypes.STRING,
    industryYears: DataTypes.STRING,
    followings: DataTypes.STRING,
    netWorth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rauw_Alejandro',
    tableName: 'rauw_alejandro'
  });
  return Rauw_Alejandro;
};