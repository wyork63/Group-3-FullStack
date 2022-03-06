const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedCountries = require('./country-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedCountries();
  await seedPosts();
  await seedComments();

  
  process.exit(0);
};

seedAll();
