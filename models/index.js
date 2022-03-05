const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Country = require('./Country');
const Activity = require('./Activity');
const ActivityLog = require('./ActivityLog');

//relationship between tables
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});

Country.has(Post, {
  foreignKey: 'country_id'
})

Post.belongsTo(Country, {
  foreignKey: 'country_id',
  onDelete: 'cascade'
});

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

//should this be activity_log? not sure
Post.hasMany(Activity, {
  foreignKey: 'post_id'
});

Activity.hasMany(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Country, Activity, ActivityLog }