module.exports = (sequelize, Sequelize) => {
  const Scenario = sequelize.define('scenarios', {
    chatbot_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    first_message_id: {
      type: Sequelize.INTEGER
    }
  }, {
      underscored: true,
  })
  Scenario.associate = (models) => {
    Scenario.hasMany(models.messages);
  }

  return Scenario;
}