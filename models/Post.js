const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create post model
class Post extends Model {
    static countcomment(body, models) {
        return models.Comment.create({
          user_id: body.user_id,
          post_id: body.post_id
        }).then(() => {
          return Post.findOne({
            where: {
              id: body.post_id
            },
            attributes: [
              'id',
              'post_url',
              'title',
              'created_at',
              [
                sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'),
                'comment_count'
              ]
            ]
          });
        });
      }
 }

//define table columns and configuration
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //title should be at least 4 character long
                len: [4]
            }
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                //text should be at least 4 character long
                len: [4]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        country_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'country',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;