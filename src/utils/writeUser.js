const fs = require('fs').promises;
const { readContentFile } = require('./readFile');

const writeUser = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const data = await readContentFile();
  const id = data.length + 1;

  const usersObj = {
    id,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };
  data.push(usersObj);
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(201).json(usersObj);
};

module.exports = { writeUser };