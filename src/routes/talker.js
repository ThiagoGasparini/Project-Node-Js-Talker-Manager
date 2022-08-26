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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const talkers = await readContentFile();
    const users = talkers.find((user) => user.id === Number(id));
    if (!users) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    }
    return res.status(200).json(users);
  } catch (err) {
   console.log(err);
  }
});

module.exports = router;