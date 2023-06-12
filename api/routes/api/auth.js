const express = require('express');
const router = express.Router();
const authCtrl = require('../../controllers/api/auth.js');

router.get("/test", authCtrl.auth)

module.exports = router;