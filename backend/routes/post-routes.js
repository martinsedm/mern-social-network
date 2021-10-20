const express = require("express");
const formidable = require("express-formidable");
const {createPost, uploadImage, postsByUser, userPost, updatePost, deletePost}
    = require("../controllers-layer/post-controller");
const {requireSignIn, canEditDeletePost} = require("../middlewares/auth-middleware");
const router = express.Router();


router.post("/create-post", requireSignIn, createPost);
router.post(
    "/upload-image",
    requireSignIn,
    formidable({ maxFileSize: 5 * 1024 * 1024 }),
    uploadImage
);

router.get("/user-posts", requireSignIn, postsByUser);
router.get("/user-post/:_id", requireSignIn, userPost);
router.put('/update-post/:_id',requireSignIn, canEditDeletePost,  updatePost);
router.delete('/delete-post/:_id', requireSignIn, canEditDeletePost, deletePost);

module.exports = router;

