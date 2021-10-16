import PostModel from "../models/post-model";
import logic from "../business-logic-layer/post-logic";

export const createPost = async (req, res) =>{
    const {content} = req.body;
    if(!content.length){
        return res.json({
            error: "Content is required"
        })
    }
    try{
        const post = new PostModel({content, postedBy: req.user._id});
        const addedPost = await logic.addPostAsync(post);
        res.status(201).json(addedPost);
   }
   catch(err){
       console.log(err);
       res.sendStatus(400);
   }
 }
