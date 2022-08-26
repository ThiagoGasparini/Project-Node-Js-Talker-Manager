const express = require('express');
const { readFile } = require('../utils/readFile');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const talkers = await readFile();
    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(200).json([]);
  }
});