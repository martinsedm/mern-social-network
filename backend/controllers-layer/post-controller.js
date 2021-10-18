import PostModel from "../models/post-model";
import logic from "../business-logic-layer/post-logic";
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_KEY,
    api_secret: config.CLOUDINARY_SECRET
})

export const createPost = async (req, res) =>{
    const {content, image} = req.body;
    if(!content.length){
        return res.json({
            error: "Content is required"
        })
    }
    try{
        const post = new PostModel({content, image, postedBy: req.user._id});
        const addedPost = await logic.addPostAsync(post);
        res.status(201).json(addedPost);
   }
   catch(err){
       console.log(err);
       res.sendStatus(400);
   }
 }

 export const uploadImage = async (req,res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.files.image.path)
        console.log(result);
        res.json({
            url: result.secure_url,
            public_id: result.public_id
        })
    }
    catch(err){
        console.log(err);
    }
 }



 export const postsByUser = async(req, res) =>{
    try{
        const posts = await logic.findAllPostsAsync();
        res.json(posts);
    }
    catch(err){
        console.log(err);
    }
 }


export const userPost = async (req, res) => {
    try {
        const post = await logic.findPostsByUserAsync(req.params._id);
        res.json(post);
    } catch (err) {
        console.log(err);
    }
};
