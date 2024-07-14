const { User } = require('../models');

const userdata = [
  {
    username: 'First_User',
    email: 'First@gmail.com',
    password: 'qwerty123',
  },
  {
    username: 'Second_User',
    email: 'Second@gmail.com',
    password: 'qwerty123',
  },
  {
    username: 'Third_User',
    email: 'Third@gmail.com',
    password: 'qwerty123',
  },
  {
    username: 'Fourth_User',
    email: 'Fourth@gmail.com',
    password: 'qwerty123',
  },
  {
    username: 'Fifth_User',
    email: 'Fifth@gmail.com',
    password: 'qwerty123',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;