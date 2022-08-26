const express = require('express');
const validatePassword = require('../middlewares/validaPassword');
const validateEmail = require('../middlewares/validaEmail');
const token = require('../utils/getToken');

const login = express.Router();

login.post('/', validateEmail, validatePassword, token);

module.exports = login;
