const router = require('express').Router();
const { BlogPost, User } = require('../../models');


router.get('/', async (req, res) => {

  try{

    const allBlogPosts = await BlogPost.findAll();

    res.status(200).json(allBlogPosts);
  } catch (err) {
    res.status(500).json(err);
}


})

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
      // Log the error details
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
})

module.exports = router;