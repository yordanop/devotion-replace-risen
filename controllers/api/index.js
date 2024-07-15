const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogpostRoutes = require('./blogpost-routes');

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);

module.exports = router;
