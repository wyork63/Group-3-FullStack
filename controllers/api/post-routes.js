const router = require("express").Router();
const sequelize = require("../../config/connection");
// add country to const below
const { Post, User, Comment, Country } = require("../../models");

const { body, validationResult} = require('express-validator');


// get all posts
//user raw SQL queries to work around the many to many relationship constraints
router.get("/", async (req, res) => {
  console.log("======================");
  try {
    const [results, metadata] =
      await sequelize.query(`select p.id,  p.title, p.created_at, u.username,
      json_arrayagg(json_merge(json_object('comment_text', c.comment_text),json_object('created_at', c.created_at), json_object('username', u2.username))) as comment
       from post p 
       left join comment c on p.id=c.post_id
       left join user u on u.id=p.user_id
       left join user u2 on u2.id=c.user_id
      group by p.id`);
    res.json(results);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get a single post
//user raw SQL queries to work around the many to many relationship constraints
router.get("/:id", async(req, res) => {
  try {
    const [results, metadata] =
      await sequelize.query(`select p.id,  p.title, p.created_at, u.username,
      json_arrayagg(json_merge(json_object('comment_text', c.comment_text),json_object('created_at', c.created_at), json_object('username', u2.username))) as comment
       from post p 
       left join comment c on p.id=c.post_id
       left join user u on u.id=p.user_id
       left join user u2 on u2.id=c.user_id
       where p.id=${req.params.id}
      group by p.id`);
    res.json(results);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/",
    body('title').notEmpty().withMessage('Post title cannot be null')
    .bail()
    .isLength({min: 4, max: 32}).withMessage ('Post title must have min 4 and max 32 characters'), 
    body('text').notEmpty().withMessage('Post body cannot be null')
    .bail()
    .isLength({min: 4, max: 1000}).withMessage ('Post body must have min 4 and max 1000 characters'), 
     (req, res) => {

      const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).send("Post input validation failed");
      //return res.send(errors.array())
    }

    Post.create({
      title: req.body.title,
      text: req.body.text,
      country_id: req.body.country_id,
      //user_id: req.body.user_id,
      user_id: req.session.user_id,
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
