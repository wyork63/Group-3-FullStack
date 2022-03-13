const router = require('express').Router();

const { json } = require('express/lib/response');
const { CLIENT_PS_MULTI_RESULTS } = require('mysql/lib/protocol/constants/client');
const { User, Post, Comment } = require('../../models');

const { sequelize } = require('../../models/User');
const { compareSync } = require('bcrypt');

const { body, validationResult} = require('express-validator');

// get all users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.post('/', 
    body('username').notEmpty().withMessage('username cannot be null')
    .bail()
    .isLength({min: 4, max: 32}).withMessage ('username must have min 4 and max 32 characters'), 
    body('email').notEmpty().withMessage('email cannot be null')
    .bail()
    .isEmail().withMessage('must be an email address'),
    body('password').notEmpty().withMessage('password cannot be null')
    .bail()
    .isLength({min: 6}).withMessage ('password must have min 6 characters'), 
   (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).send("User input validation failed");
      //return res.send(errors.array())
    }
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
          //accessing the session information
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/login', (req, res) => {
      console.log("start login");
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        console.log("failed login");
        res.status(400).json({ message: 'There is no user with the matching email' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        console.log("password");
        res.status(400).json({ message: 'The provided password is incorrect' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        console.log("Saving session")
        res.json();
        //res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'text', 'created_at']
      },
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
})


function isEmailInUse(email){
  return new Promise((resolve, reject) => {
      sequelize.query(`SELECT username FROM user WHERE email ='${email}'`,  function (error, results, fields) {
          if(!error){
              console.log("EMAIL COUNT : "+results[0].total);
              return resolve(results[0].total > 0);
          } else {
              return reject(new Error('Email in use!'));
          }
        }
      );
  });
}

module.exports = router;

