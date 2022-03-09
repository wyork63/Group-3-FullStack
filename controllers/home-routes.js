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
      },
      {
        model: Country,
        attributes: ['id']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('home', {
        posts,
        loggedIn: req.session.loggedIn
      });
      console.log(dbPostData)
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

// route for spain = 2
router.get('/spainhb', (req, res) => {
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
      console.log('hello')
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('spainhb', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route for italy =1 
router.get('/italyhb', (req, res) => {
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
      console.log('hello')
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('italyhb', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for turkie = 5 
router.get('/turkie', (req, res) => {
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
      console.log('hello')
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('turkie', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for usa = 4
router.get('/usa', (req, res) => {
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
      console.log('hello')
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('usa', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for greatbritain = 3
router.get('/greatBritain', (req, res) => {
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
      console.log('hello')
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('greatBritain', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//routes to go to other pages
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/add-post', (req, res) => {
  res.render('add-post');
});

router.get('/spainhb', (req, res) => {
  res.render('spainhb');
});

router.get('/italyhb', (req, res) => {
  res.render('italyhb');
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