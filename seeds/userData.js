const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'test1',
    email: 'test1@gmail.com',
    password: 'password1'
  },
  {
    id: 2,
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'password2'
  },
  {
    id: 3,
    username: 'test3',
    email: 'test3@gmail.com',
    password: 'password3'
  },
  {
    id: 4,
    username: 'test4',
    email: 'test4@gmail.com',
    password: 'password4'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
