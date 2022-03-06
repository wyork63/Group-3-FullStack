const { Post } = require('../models');

const postdata = [
  {
    title: 'tite 1',
    text: 'post body',
    user_id: 1,
    country_id: 1
  },
  {
    title: 'tite 2',
    text: 'post body',
    user_id: 1,
    country_id: 1
  },
  {
    title: 'tite 3',
    text: 'post body',
    user_id: 2,
    country_id: 1
  },
  {
    title: 'tite 4',
    text: 'post body',
    user_id: 3,
    country_id: 1
  },
  {
    title: 'tite 5',
    text: 'post body',
    user_id: 3,
    country_id: 1
  },
  {
    title: 'tite 6',
    text: 'post body',
    user_id: 4,
    country_id: 1
  },
  {
    title: 'tite 7',
    text: 'post body',
    user_id: 1,
    country_id: 1
  },
  {
    title: 'tite 8',
    text: 'post body',
    user_id: 1,
    country_id: 1
  },
  {
    title: 'tite 9',
    text: 'post body',
    user_id: 3,
    country_id: 1
  },
  {
    title: 'tite 10',
    text: 'post body',
    user_id: 2,
    country_id: 1
  },
  {
    title: 'tite 11',
    text: 'post body',
    user_id: 3,
    country_id: 1
  },
  {
    title: 'tite 12',
    text: 'post body',
    user_id: 2,
    country_id: 1
  },
  {
    title: 'tite 13',
    text: 'post body',
    user_id: 2,
    country_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
