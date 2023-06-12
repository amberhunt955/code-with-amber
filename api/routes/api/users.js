const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users.js');

router.get("/test", usersCtrl.addUser)

module.exports = router;