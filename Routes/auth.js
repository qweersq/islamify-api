const express = require('express');
const router = express.Router();
const { LoginUser } = require('../Controller/users');

router.post('/login', LoginUser);

module.exports = router;