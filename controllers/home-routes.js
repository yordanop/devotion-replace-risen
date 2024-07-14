const router = require('express').Router();
const { BlogPost, User } = require('../models')

// GET all blogposts for homepage
router.get('/', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({
      include : [
        {
          model : User,
          attributes: ['username']
        }
      ]
    });

    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    console.log(blogposts[0].user.username)

    res.render('homepage', {
      blogposts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;