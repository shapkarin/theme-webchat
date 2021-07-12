const sequelize_fixtures = require('sequelize-fixtures');
const faker = require('faker');

const models = require('./models');

const getRandomInt = function (minVal, maxVal) {
  const min = Math.ceil(minVal);
  const max = Math.floor(maxVal);
  return Math.floor(Math.random() * (max - min)) + min;
};

const messages = (count) => [...Array(count)].map(_ => ({
  model: 'messages',
  data: {
    scenario_id: 1,
    block_id: 1,
    rank: 42,
    text: faker.lorem.sentences(getRandomInt(1, 4)),
    quick_reply_id: 2,
  }
}));

sequelize_fixtures.loadFixtures(messages(100), models).then(function(){
  console.log('Fixtures are loaded');
});