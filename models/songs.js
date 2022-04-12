'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      songs.belongsTo(models.Rauw_Alejandro, {
        foreignKey: 'name',
        as: 'songs',
      onDelete: 'cascade',
      onUpdate: 'cascade'
      })
    }
  }
  songs.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    totalViews: DataTypes.STRING,
    releaseDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'songs',
    tableName: 'songs'
  });
  return songs;
};