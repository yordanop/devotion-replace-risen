const sequelize = require('./config/connection');
const { User } = require('./models');

const fetchUsers = async () => {
  try {
    await sequelize.authenticate();
    const users = await User.findAll();
    console.log('Seeded users:', JSON.stringify(users, null, 2));
    process.exit(0);
  } catch (error) {
    console.error('Error fetching users:', error);
    process.exit(1);
  }
};

fetchUsers();