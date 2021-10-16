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
        required: true
    },
    about: {},
    photo: String,
    following: [{type: Schema.ObjectId, ref: "UserModel"}],
    followers: [{type: Schema.ObjectId, ref: "UserModel"}]
}, { versionKey: false, timestamps: true});

const UserModel = mongoose.model("UserModel", UserSchema, "users");

module.exports = UserModel;
