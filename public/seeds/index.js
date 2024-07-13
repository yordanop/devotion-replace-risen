const sequelize = require('../config/connection');
const seedUser = require('./galleryData');
const seedBlogPost = require('./paintingData');
const seedComment = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogPost();
  await seedComment();

  process.exit(0);
};

seedAll();
