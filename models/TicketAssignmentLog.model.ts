// models/TicketAssignmentLog.js

import { DataTypes } from "sequelize";

const TicketAssignmentLog = (sequelize, Sequelize ) => {
  return  sequelize.define("TicketAssignmentLog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id:{
       type: DataTypes.STRING,
    },
    assignedBy: {
      type: DataTypes.STRING, // "system-ai" or "adminId"
      allowNull: false,
    },
    reason: { type: DataTypes.TEXT },
  });
};

export default TicketAssignmentLog;
