module.exports = (sequelize, Sequelize) => {
  const Scenario = sequelize.define('scenarios', {
    chatbot_id: {
      type: Sequelize.ID
    },
    name: {
      type: Sequelize.STRING
    },
    first_message_id: {
      type: Sequelize.ID
    }
  }, {
      underscored: true,
  });

  return Scenario;
}