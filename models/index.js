const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.user=('./user.model')(sequelize,Sequelize)
db.Ticket=require('./ticket.model')(sequelize,Sequelize)
db.message=require('./message.model')(sequelize,Sequelize)
db.TicketAssignment=require('./TicketAssignmentLog.model')(sequelize,Sequelize)



db.user.hasMany(db.Ticket, {
  foreignKey: 'user_id'
});
db.Ticket.belongsTo(db.user, {
  foreignKey: 'user_id'
});


db.user.hasMany(db.TicketAssignment, {
  foreignKey: 'user_id'
});
db.TicketAssignment.belongsTo(db.user, {
  foreignKey: 'user_id'
});

db.Ticket.sync({alter:true})

db.TicketAssignment.sync({alter:true})

db.user.sync({alter:true})

db.message.sync({alter:true})


module.exports = db;