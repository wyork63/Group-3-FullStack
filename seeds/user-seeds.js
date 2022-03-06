const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'test1',
    email: 'test1@gmail.com',
    password: 'password1'
  },
  {
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'password2'
  },
  {
    username: 'test3',
    email: 'test3@gmail.com',
    password: 'password3'
  },
  {
    username: 'test4',
    email: 'test4@gmail.com',
    password: 'password4'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
