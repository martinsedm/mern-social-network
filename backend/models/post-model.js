const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const PostSchema = mongoose.Schema({
    content: {
        type: {},
        required: true,
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    image: {
        url: String,
        public_id: String
    },
    likes: [{type: ObjectId, ref: "user"}],
    comments: [
        {
            text: String,
            created: {type: Date, default: Date.now},
            postedBy: {
                type: ObjectId,
                ref: "User"
            },

        }
    ]
}, { versionKey: false, timestamps: true});

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;
