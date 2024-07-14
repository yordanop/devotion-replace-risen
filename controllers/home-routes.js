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

    res.render('homepage', {
      blogposts, 
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;