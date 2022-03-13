const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Wanderlust14',
    email: 'test1@gmail.com',
    password: 'password1'
  },
  {
    username: 'Billy Bob the Traveling Zeitgeist',
    email: 'test2@gmail.com',
    password: 'password2'
  },
  {
    username: 'Oscar_Meyer_wanderer',
    email: 'test3@gmail.com',
    password: 'password3'
  },
  {
    username: 'Will_theTraveler',
    email: 'test4@gmail.com',
    password: 'password4'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
