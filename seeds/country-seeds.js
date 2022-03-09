const sequelize = require('../config/connection');
const { Country, post } = require('../models');

const countrydata = [
  {
    id: 1,
    name: 'Italy',
  },
  {
    id: 2,
    name: 'Spain',
  },
  {
    id: 3,
    name: 'Great Britain',
  },
  {
    id: 4,
    name: 'USA',
  },
  {
    id: 5,
    name: 'Turkie',
  },
];

const seedCountries = () => Country.bulkCreate(countrydata);

module.exports = seedCountries;
