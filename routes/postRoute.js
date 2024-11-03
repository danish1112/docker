const express = require('express');

const postController = require("../controllers/postController");

const { protect } = require("../middlewares/auth")

const router = express.Router();

router.route("/").get(protect, postController.getAllPosts).post(protect, postController.createPost);

router.route("/:id").get(protect, postController.getPost).patch(protect, postController.updatePost).delete(protect, postController.removePost)

module.exports = router