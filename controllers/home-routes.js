const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Country } = require('../models');

//get all posts for the home page
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
      'created_at',
      'country_id',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
    ]
  })
// code for posting by country_id
  .then(dbPostData => {
    const spainPosts = dbPostData.filter(x => {
      return (x.country_id == 2)});
      const posts = spainPosts.map(posts => posts.get({ plain: true }));
      res.render('spainhb', {
        posts,
        loggedIn: req.session.loggedIn
      });
})
});

// route for italy =1 
router.get('/italyhb', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
      'country_id',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
// code for posting by country_id
.then(dbPostData => {
  const italyPosts = dbPostData.filter(x => {
    return (x.country_id == 1)});
    const posts = italyPosts.map(posts => posts.get({ plain: true }));
    res.render('italyhb', {
      posts,
      loggedIn: req.session.loggedIn
    });

})
});    

//route for turkie = 5 
router.get('/turkie', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
      'country_id',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
// code for posting by country_id
.then(dbPostData => {
  const turkiePosts = dbPostData.filter(x => {
    return (x.country_id == 5)});
    const posts = turkiePosts.map(posts => posts.get({ plain: true }));
    res.render('turkie', {
      posts,
      loggedIn: req.session.loggedIn
    });
    
})
});    

//route for usa = 4
router.get('/usa', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
      'country_id',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
// code for posting by country_id
.then(dbPostData => {
  const usaPosts = dbPostData.filter(x => {
    return (x.country_id == 4)});
    const posts = usaPosts.map(posts => posts.get({ plain: true }));
    res.render('usa', {
      posts,
      loggedIn: req.session.loggedIn
    });
    
    
})
});    

//route for greatbritain = 3
router.get('/greatBritain', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at',
      'country_id',
      [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
// code for posting by country_id
.then(dbPostData => {
  const gbPosts = dbPostData.filter(x => {
    return (x.country_id == 3)});
    const posts = gbPosts.map(posts => posts.get({ plain: true }));
    res.render('greatBritain', {
      posts,
      loggedIn: req.session.loggedIn
    });
   
  
})
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

  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'text',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
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
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
        // pass data to template
        res.render('post', { post, 
          loggedIn: req.session.loggedIn });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;