require("../data-access-layer/dal");
const  Post = require("../models/post-model");

// Add New Post
function addPostAsync(post){
    return post.save();
}

function findPostsByUserAsync(_id){
    return Post.find({postedBy: _id }).
    populate('postedBy', '_id name image')
        .sort({createdAt: -1})
        .limit(10).exec();
}

function findAllPostsAsync(){
    return Post.find().
    populate('postedBy', '_id name image')
        .sort({createdAt: -1})
        .limit(10).exec();
}

module.exports = {
    addPostAsync,
    findPostsByUserAsync,
    findAllPostsAsync
};
