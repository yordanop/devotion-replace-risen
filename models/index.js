const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');


// User and BlogPost
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});
  
// User and Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// BlogPost and Comment
BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comment };