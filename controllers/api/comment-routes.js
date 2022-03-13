const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/',  (req, res) => {
  console.log('---------------------');
  console.log(req.body.comment_text);
  console.log(req.session.user_id);
  console.log(req.body.post_id);
  Comment.create({
    comment_text: req.body.comment_text,
    //user_id: req.body.user_id,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
