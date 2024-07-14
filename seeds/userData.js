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

const seedUser = async () => {
  try {
    await User.bulkCreate(userdata, { individualHooks: true });
    console.log('Users have been seeded');
  } catch (error) {
    console.error('Failed to seed users:', error);
  }
};

module.exports = seedUser;