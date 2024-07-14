const router = require('express').Router();
const { BlogPost, User } = require('../models')
const withAuth = require('../utils/auth');

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



// Dashboard route
router.get('/dashboard', withAuth, async (req, res) => {

  try {
    const blogpostData = await BlogPost.findAll({
      include : [
        {
          model : User,
          attributes: ['username']
        }
      ],
      where: { user_id: req.session.user_id }
    }
  );

    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render('dashboard', {
      blogposts, 
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// New post route
router.get('/new_post', withAuth, (req, res) => {
    res.render('new-post', {
      loggedIn: req.session.loggedIn
    });
    return;
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;