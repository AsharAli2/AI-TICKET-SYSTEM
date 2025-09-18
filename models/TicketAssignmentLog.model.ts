// models/TicketAssignmentLog.js

module.exports = (sequelize, Sequelize ) => {
  const TicketAssignmentLog = sequelize.define("TicketAssignmentLog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    assignedBy: {
      type: DataTypes.STRING, // "system-ai" or "adminId"
      allowNull: false,
    },
    reason: { type: DataTypes.TEXT },
  });
};
