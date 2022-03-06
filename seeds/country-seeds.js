const sequelize = require('../config/connection');
const { Country, post } = require('../models');

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

const seedCountries = () => Country.bulkCreate(countrydata);

module.exports = seedCountries;
