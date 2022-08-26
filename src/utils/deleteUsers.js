const fs = require('fs').promises;
const { readContentFile } = require('./readFile');

module.exports = async (req, res) => {
const { id } = req.params;
const data = await readContentFile();
const userInd = data.findIndex((user) => user.id === Number(id));
  if (!userInd) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }
  data.splice(userInd, 1);
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(204).json(data);
};