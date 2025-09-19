const { DataTypes } = require("sequelize");

const ticket = (sequelize, Sequelize) => {
    return sequelize.define(
        "Ticket",
        {
            Ticket: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING
            },
            user_id: {
                type: DataTypes.STRING
            },
            category: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            Document: {
                type: DataTypes.STRING
                
            },
            priority: {
                type: DataTypes.ENUM("HIGH", "LOW"),
                allowNull: false,
                defaultValue: "LOW",
            },
            status: {
                type: DataTypes.ENUM("Resolve", "Pending"),
                allowNull: false,
                defaultValue: "Pending",
            }
        },

        {
            timestamps: true
        }
    );
};
export  default ticket;