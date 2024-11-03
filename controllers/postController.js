const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: {
                post
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.removePost = async (req, res, next) => {
    try {

        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: "success",
        })

    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const { title, body } = req.body;

        const post = await Post.create({ title, body });

        return res.status(200).json({
            status: "success",
            data: {
                post
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(200).json({
            status: "success",
            data: {
                post
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail"
        })
    }
}