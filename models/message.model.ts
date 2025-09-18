// models/Message.js

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("Message", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    message: { type: DataTypes.TEXT, allowNull: false },
    attachments: { type: DataTypes.JSON },
  });
};
