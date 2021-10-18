'use strict';
const {
  Model
} = require('sequelize');
var bcrypt = require("bcrypt-nodejs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static generateHash(password){
      return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
    }
    static validPassword(password){
      return bcrypt.compareSync(password, this.local.password);
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
