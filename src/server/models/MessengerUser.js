module.exports = (sequelize, Sequelize) => {
  const MessengerUser = sequelize.define('messenger_users', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  }, {
      underscored: true,
  });

  return MessengerUser;
}