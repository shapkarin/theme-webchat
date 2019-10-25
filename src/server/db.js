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

const db = {
  models: {}
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.models.messengerUsers = require('./models/MessengerUser')(sequelize, Sequelize);
db.models.messages = require('./models/Message')(sequelize, Sequelize);
db.models.scenarios = require('./models/Scenario')(sequelize, Sequelize);

Object.keys(db.models).forEach((modelKey) => {
  const model = db.models[modelKey]
  if (model.associate) {
    model.associate(db.models)
  }
})

db.models.messages.findOne({
  where: { id: 151 },
  include: ['scenario']
}).then(mu => {
  console.log(mu.scenario.id)
})

module.exports = db;