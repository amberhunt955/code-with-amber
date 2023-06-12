const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts.js');

router.get("/test", postsCtrl.addPost)

module.exports = router;