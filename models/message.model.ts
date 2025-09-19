// models/Message.js

import { DataTypes } from "sequelize";

const message = (sequelize, Sequelize) => {
  return sequelize.define("Message", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    message: { type: DataTypes.TEXT, allowNull: false },
    attachments: { type: DataTypes.JSON },
  });
};

export default message;
