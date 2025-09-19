import { Sequelize, DataTypes } from 'sequelize';

 const User = (sequelize, Sequelize) => {
    return sequelize.define(
        "user",{
           user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});
 }

export default User;