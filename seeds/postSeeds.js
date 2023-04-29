const { Post } = require('../models');

const postData = [
    {
        title: "This is a title!",
        post_content: "v cool.",
        user_id: 1
    },
    {
        title: "Post title",
        post_content: "Post content",
        user_id: 2
    },
    {
        title: "Tech Blog Suck.",
        post_content: "i hate it here.",
        user_id:3
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;