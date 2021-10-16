const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const {ObjectId} = mongoose.Schema;

const PostSchema = mongoose.Schema({
    content: {
        type: {},
        required: true,
    },
    postedBy: {
        type: ObjectId,
        ref: "UserModel"
    },
    image: {
        url: String,
        public_id: String
    },
    likes: [{type: ObjectId, ref: "UserModel"}],
    comments: [
        {
            text: String,
            created: {type: Date, default: Date.now},
            postedBy: {
                type: ObjectId,
                ref: "UserModel"
            },

        }
    ]
}, { versionKey: false, timestamps: true});

const PostModel = mongoose.model("PostModel", PostSchema, "posts");

module.exports = PostModel;
