const router = require("express").Router();
const { Comment } = require("../../models");
// const { body, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post(
  // "/",
  // body("comment_text").notEmpty().withMessage("Comment cannot be null")
  // .bail()
  // .isLength({min: 1, max: 500}).withMessage ('Comment must have min 1 and max 500 characters'),
  (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).send("comment input validation failed");
    //   //return res.send(errors.array())
    // }
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.body.user_id,
      user_id: req.session.user_id,
      //post_id: req.body.post_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
);

module.exports = router;
