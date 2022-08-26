const { readContentFile } = require('./readFile');

module.exports = async (req, res) => {
  const { q } = req.query;
  const data = await readContentFile();
  const searchTerm = data.filter((user) => user.name.includes(q));
    
    if (!q || q.length === 0) {
      return res.status(200).json(data); 
    }
    if (!searchTerm) {
      return res.status(200).json([]);
    }
  return res.status(200).json(searchTerm);
};