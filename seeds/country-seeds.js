const sequelize = require('../config/connection');
const { Country } = require('../models');

const countrydata = [
  {
    name: 'Italy',
  },
  {
    name: 'Spain',
  },
  {
    name: 'Great Britain',
  },
  {
    name: 'USA',
  },
  {
    name: 'Turkie',
  },
];

const seedCountries = () => User.bulkCreate(countrydata);

module.exports = seedCountries;
