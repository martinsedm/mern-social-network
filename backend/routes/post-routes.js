const express = require("express");
const formidable = require("express-formidable");
const {createPost, uploadImage} = require("../controllers-layer/post-controller");
const {requireSignIn} = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/create-post",requireSignIn, createPost);
router.post('/upload-image',requireSignIn,formidable({maxFileSize: 5 * 1024 * 1024}), uploadImage);


module.exports = router;
