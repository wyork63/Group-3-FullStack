const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Country } = require('../models');


// router.get('/', (req, res) => {
//   res.render('home');
// });

//get all posts for the home page
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('home', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/spain', (req, res) => {
  res.render('spain');
});

router.get('/italy', (req, res) => {
  res.render('italy');
});

router.get('/turkie', (req, res) => {
  res.render('turkie');
});

router.get('/usa', (req, res) => {
  res.render('usa');
});

router.get('/greatBritain', (req, res) => {
  res.render('greatBritain');
});

module.exports = router;