const Sequelize = require('sequelize')

const { DB_NAME, DB_USER, DB_PASS } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.messengerUsers = require('./models/MessengerUser')(sequelize, Sequelize);

// db.messengerUsers.findByPk(38).then(mu => {
//   console.log(mu)
// })

module.exports = db;