const express = require('express');
const router = express.Router();
const { GetUserById, RegisterUser, UpdateUserById } = require('../Controller/users');

router.post('/register', RegisterUser);
router.get('/:id', GetUserById);
router.put('/:id', UpdateUserById);

module.exports = router;