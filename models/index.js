const User = require('./User');
const Post = require('./Post');
const comments = require('./comments')

//establish relationships
User.hasMany(Post)
module.exports = { User, Post };
