const router = require('express').Router();
const { BlogPost } = require('../../models');


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

module.exports = router;