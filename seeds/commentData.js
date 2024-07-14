const { Comment } = require('../models');

const commentdata = [
  {
    blogpost_id : 10,
    user_id: 1,
    content: 'This is my Comment 1_1',
    create_date: 'February 15 2021 13:00:00',
  },
  {
    blogpost_id : 8,
    user_id: 1,
    content: 'This is my Comment 1_2',
    create_date: 'February 20 2022 15:00:00',
  },
  {
    blogpost_id : 9,
    user_id: 2,
    content: 'This is my Comment 2_1',
    create_date: 'April 15 2021 13:00:00',
  },
  {
    blogpost_id : 7,
    user_id: 2,
    content: 'This is my Comment 2_2',
    create_date: 'April 20 2022 15:00:00',
  },
  {
    blogpost_id : 6,
    user_id: 3,
    content: 'This is my Comment 3_1',
    create_date: 'June 15 2021 13:00:00',
  },
  {
    blogpost_id : 4,
    user_id: 3,
    content: 'This is my Comment 3_2',
    create_date: 'June 20 2022 15:00:00',
  },
  {
    blogpost_id : 5,
    user_id: 4,
    content: 'This is my Comment 4_1',
    create_date: 'February 15 2021 13:00:00',
  },
  {
    blogpost_id : 3,
    user_id: 4,
    content: 'This is my Comment 4_2',
    create_date: 'February 20 2022 15:00:00',
  },
  {
    blogpost_id : 2,
    user_id: 5,
    content: 'This is my Comment 5_1',
    create_date: 'February 15 2021 13:00:00',
  },
  {
    blogpost_id : 1,
    user_id: 5,
    content: 'This is my Comment 5_2',
    create_date: 'February 20 2022 15:00:00',
  }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;