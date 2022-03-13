const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Wow you are right this place is rad!',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Such a cool spot thank you for sharing',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'This was an awesome right up! Thank you for sharing with us',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'dang this sounds like a great experience hope to go soon',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'I got food poisioning at that little caesars! Dont go',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'this was a cool spot to go to, but the lines took forever!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'I will not go to this place ever again, such a waste of time!',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'You are right! This place is sweet!',
    user_id: 1,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
