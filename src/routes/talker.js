const express = require('express');
const { readContentFile } = require('../utils/readFile');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const talkers = await readContentFile();
    return res.status(200).json(talkers);
  } catch (err) {
    console.log(err);
    return res.status(200).json([]);
  }
});

module.exports = router;