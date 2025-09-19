const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
import mysql2 from 'mysql2'
import ticket from './ticket.model';
import User from './user.model';
import message from './message.model';
import TicketAssignmentLog from './TicketAssignmentLog.model';


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
   dialectModule: mysql2,
});

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.user=User(sequelize,Sequelize)
db.Ticket=ticket(sequelize,Sequelize)
db.message=message(sequelize,Sequelize)
db.TicketAssignment=TicketAssignmentLog(sequelize,Sequelize)



db.user.hasMany(db.Ticket, {
  foreignKey: 'user_id',
  targetKey:"id"
});

db.Ticket.belongsTo(db.user, {
  foreignKey: 'user_id',
  targetKey:"user_id"
});



// db.user.hasMany(db.TicketAssignment, {
//   foreignKey: 'user_id'
// });
// db.TicketAssignment.belongsTo(db.user, {
//   foreignKey: 'user_id'
// });

db.Ticket.sync({})

db.TicketAssignment.sync({})

db.user.sync({})

db.message.sync({})


export default db