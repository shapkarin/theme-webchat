module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('messages', {
    scenario_id: {
      type: Sequelize.INTEGER
    },
    block_id: {
      type: Sequelize.INTEGER
    },
    rank: {
      type: Sequelize.INTEGER
    },
    text: {
      type: Sequelize.TEXT
    },
    quick_reply_id: {
      type: Sequelize.INTEGER
    },
  }, {
      underscored: true,
  });

  Message.associate = (models) => {
    Message.belongsTo(models.scenarios, { foreignKey: 'scenario_id' });
  }

  return Message;
}