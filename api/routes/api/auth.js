const express = require('express');
const router = express.Router();
const authCtrl = require('../../controllers/api/auth.js');

router.post("/register", authCtrl.register)
router.post("/login", authCtrl.login)
router.post("/logout", authCtrl.logout)

module.exports = router;