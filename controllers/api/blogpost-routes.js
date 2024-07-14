const router = require('express').Router();
const { BlogPost } = require('../../models');
const sequelize = require('sequelize');


router.post('/', async (req, res) => {

    console.log(req.body)
    // try {
    //     const matchData = await BlogPost.create(req.body);
    //     const match = matchData.get({ plain: true });
    //     res.status(200).json(match);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
})