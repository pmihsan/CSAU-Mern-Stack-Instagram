const Post = require("../model/model");

const getPosts = async (req,res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch(err) {
        res.status(500).json({ message: err.message })
    }      
}

const getPost = async (req,res) => {
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {                        // for id's that are formatted incorrectly
        return res.status(400).json({message: "Invalid id"});
    }
    try {
        const post = await Post.findById(id);
        if(!post) {
            return res.status(404).json({message: "No such post exists"});
        }
        res.json(post);
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const createPost = async (req,res) => {
    const post = new Post(req.body);
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

const updatePost = async (req,res) => {
    let id = req.params.id;
    let options = {};
    options = req.body;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {                        // for id's that are formatted incorrectly
        return res.status(400).json({message: "Invalid id"});
    }
    try {
        const updatedPost = await Post.findByIdAndUpdate(id,options);
        if(!updatedPost) {
            return res.status(404).json({message: "No such post exists"})
        }
        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

const deletePost = async (req,res) => {
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {                        // for id's that are formatted incorrectly
        return res.status(400).json({message: "Invalid id"});
    }
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if(!deletedPost) {
            return res.status(404).json({message: "No such post exists"})
        }
        res.status(200).json(deletedPost);
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}