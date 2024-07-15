const router = require('express').Router();
const { BlogPost, User } = require('../../models');



// GET one Blogpost
router.get('/edit/:blogpost_id', async (req, res) => {
  
  try {
    const dbBlogpostData = await BlogPost.findByPk(req.params.blogpost_id, {
      include: [
        { model: User }
      ]
    });

    const blogpost = dbBlogpostData.get({ plain: true });

    console.log(blogpost)
    
    res.render('edit-blogpost', { 
      blogpost, 
      loggedIn: req.session.loggedIn,
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  res.render('edit-blogpost')

});

router.post('/', async (req, res) => {

    req.body['user_id'] = req.session.user_id;
    
    try {
        const blogpostData = await BlogPost.create(req.body);
        const blogpost = blogpostData.get({ plain: true });
        res.status(200).json(blogpost);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.put('/edit/:blogpost_id', async (req, res) => {
    console.log('--------------------------------------')
    console.log(req.body)
    console.log('--------------------------------------')

    const { title, content } = req.body;
    try {
      await BlogPost.update(
        { title, content },
        {
          where: {
            blogpost_id: req.session.user_id,
          }
        }
      );

      if (updatedBlogPost[0] === 0) {
        return res.status(404).json({ message: 'Blog post not found' });
      };


      res.json(`Post updated`);
    }
    catch (err) {
      // Log the error details
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
})

module.exports = router;