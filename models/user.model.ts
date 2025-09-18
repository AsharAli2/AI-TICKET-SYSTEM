import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
export const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});