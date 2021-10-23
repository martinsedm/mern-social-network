const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    secret: {
        type: String,
        required: true,
        lowercase: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    about: {},
    image: {
        url: String,
        public_id: String
    },
    following: [{type: Schema.ObjectId, ref: "User"}],
    followers: [{type: Schema.ObjectId, ref: "User"}]
}, { versionKey: false, timestamps: true});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
