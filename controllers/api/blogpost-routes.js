const router = require('express').Router();
const { BlogPost, User } = require('../../models');

// ROUTE to get all posts
router.get('/', async (req, res) => {

  try{

    const allBlogPosts = await BlogPost.findAll();

    res.status(200).json(allBlogPosts);
  } catch (err) {
    res.status(500).json(err);
}
});

// DELETE route to delete a blog post
router.delete('/delete/:blogpost_id', async (req, res) => {
  try {
    const blogpostId = req.params.blogpost_id;

    const blogpost = await BlogPost.findByPk(blogpostId);

    if (!blogpost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    // Delete the blog post
    await blogpost.destroy();

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// ROUTE to POST new blogpost
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

// ROUTE to UPDATE a blogpost
router.put('/:blogpost_id', async (req, res) => {

    const { title, content } = req.body;
    try {
      const updatedBlogPost = await BlogPost.update(
        { title, content },
        {
          where: {
            blogpost_id: req.params.blogpost_id,
          }
        }
      );

      if (updatedBlogPost[0] === 0) {
        return res.status(404).json({ message: 'Blog post not found' });
      };


      res.json(`Post updated`);
    }
    catch (err) {
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
})

module.exports = router;