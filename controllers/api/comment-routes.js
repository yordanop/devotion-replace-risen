const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// ROUTE to POST new comment
router.post('/', withAuth, async (req, res) => {
    
    const foundBlogPostID = req.rawHeaders.find(item => item.includes('blogpost'));
    const lastSlashIndex = foundBlogPostID.lastIndexOf('/');
  
    let blogpostID = null;
    if (lastSlashIndex !== -1) {
        blogpostID = parseInt(foundBlogPostID.slice(lastSlashIndex+1));
        req.body['blogpost_id'] = blogpostID;
    }
  
    req.body['user_id'] = req.session.user_id;

    try {
        const commentData = await Comment.create(req.body);
        const comment = commentData.get({ plain: true });
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;