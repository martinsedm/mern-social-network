require("../data-access-layer/dal");
const  Post = require("../models/post-model");

// Add New Post
function addPostAsync(post){
    return post.save();
}

function findPostsByIdAsync(_id){
    return Post.findById({_id}).exec();
}

function findAllPostsAsync(){
    return Post.find().
    populate('postedBy', '_id name image')
        .sort({createdAt: -1})
        .limit(10).exec();
}

function findPostByIdAndUpdateAsync(_id, body){
    return Post.findByIdAndUpdate(_id, body, {
        new: true,
    });
}

function findPostByIdAndDeleteAsync(_id){
    return Post.findByIdAndDelete(_id);
}

function findPostByInFollowingsAsync(following){
    return Post.find({postedBy: { $in: following } })
        .populate('postedBy','_id name image')
        .sort({createdAt: -1}).
        limit(10).exec();
}

module.exports = {
    addPostAsync,
    findPostsByIdAsync,
    findAllPostsAsync,
    findPostByIdAndUpdateAsync,
    findPostByIdAndDeleteAsync,
    findPostByInFollowingsAsync
};
