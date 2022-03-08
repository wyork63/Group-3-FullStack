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


// const { User, Post } = require('../models');



// GET all galleries for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render('homepage', {
//       galleries,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     console.log(gallery)
//     res.render('gallery', { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//   console.log(req.session);
//     Post.findAll({
//       attributes: [
//         'id',
//         'text',
//         'title',
//         'created_at',
//         // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         },
//   // add country tag here 
//       ]
//     })
//       .then(dbPostData => {
//         // pass a single post object into the homepage template
//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('home', { posts, loggedIn: req.session.loggedIn });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
    res.render('homepage');
  });

//   router.get('/post/:id', (req, res) => {
//     Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id',
//         'text',
//         'title',
//         'created_at',
//         // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         }
//       ]
//     })
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }
  
//         // serialize the data
//         const post = dbPostData.get({ plain: true });
  
//         // pass data to template
//         res.render('single-post', { post, 
//           loggedIn: req.session.loggedIn });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


module.exports = router;