const { BlogPost } = require('../models');

const blogpostdata = [
  {
    user_id: 1,
    content: 'This is my Post 1_1',
    create_date: 'January 1 2020 12:00:00',
  },
  {
    user_id: 1,
    content: 'This is my Post 1_2',
    create_date: 'January 15 2021 14:00:00',
  },
  {
    user_id: 2,
    content: 'This is my Post 2_1',
    create_date: 'March 1 2020 12:00:00',
  },
  {
    user_id: 2,
    content: 'This is my Post 2_2',
    create_date: 'March 15 2021 14:00:00',
  },
  {
    user_id: 3,
    content: 'This is my Post 3_1',
    create_date: 'May 1 2020 12:00:00',
  },
  {
    user_id: 3,
    content: 'This is my Post 3_2',
    create_date: 'May 15 2021 14:00:00',
  },
  {
    user_id: 4,
    content: 'This is my Post 4_1',
    create_date: 'July 1 2020 12:00:00',
  },
  {
    user_id: 4,
    content: 'This is my Post 4_2',
    create_date: 'July 15 2021 14:00:00',
  },
  {
    user_id: 5,
    content: 'This is my Post 5_1',
    create_date: 'September 1 2020 12:00:00',
  },
  {
    user_id: 5,
    content: 'This is my Post 5_2',
    create_date: 'September 15 2021 14:00:00',
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlogPost;