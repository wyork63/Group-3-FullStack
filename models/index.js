const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Country = require('./Country');
// const Activity = require('./Activity');
// const ActivityLog = require('./ActivityLog');

//relationship between tables
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

Country.hasMany(Post, {
  foreignKey: 'country_id'
})

Post.belongsTo(Country, {
  foreignKey: 'country_id',
  onDelete: 'cascade'
});

//many to many relationshiop using comment through table
// User.belongsToMany(Post, {
//   through: {
//     model:Comment,unique: false
//   },
//   // as: 'commented_posts',
//   // foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//   through: {
//     model:Comment,unique: false
//   },
//   // as: 'commented_posts',
//   // foreignKey: 'post_id'
// });



// direct relationship between post and comment OR user and comment
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
});


module.exports = { User, Post, Comment, Country }