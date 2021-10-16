require("../data-access-layer/dal");
const  PostModel = require("../models/post-model");

// Add New Post
function addPostAsync(post){
    return post.save();
}

module.exports = {
    addPostAsync
};
