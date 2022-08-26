const express = require('express');
const validaPassword = require('../middlewares/validaPassword');
const validaEmail = require('../middlewares/validaEmail');
const token = require('../utils/getToken');

const login = express.Router();

login.post('/', validaEmail, validaPassword, token);

module.exports = login;
