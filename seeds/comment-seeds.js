const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'comment 1',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'comment 2',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'comment 3',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'comment 4',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'comment 6',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'comment 7',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'comment 8',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'comment 9',
    user_id: 1,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
