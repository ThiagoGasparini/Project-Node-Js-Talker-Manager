const express = require('express');
const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const token = require('../utils/getToken');

const login = express.Router();

login.post('/', validateEmail, validatePassword, token);

module.exports = login;
