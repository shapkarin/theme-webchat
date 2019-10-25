module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('messages', {
    scenario_id: {
      type: Sequelize.ID
    },
    block_id: {
      type: Sequelize.ID
    },
    rank: {
      type: Sequelize.NUMBER
    },
    text: {
      type: Sequelize.TEXT
    },
    quick_reply_id: {
      type: Sequelize.ID
    },
  }, {
      underscored: true,
  });

  return Message;
}