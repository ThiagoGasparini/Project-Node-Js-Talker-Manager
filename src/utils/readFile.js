const fs = require('fs').promises;

const readContentFile = async () => {
  const path = 'src/talker.json';
  const fileContent = await fs.readFile(path, 'utf-8');
  const parseContent = JSON.parse(fileContent);
  return parseContent;
};

module.exports = { readContentFile };
