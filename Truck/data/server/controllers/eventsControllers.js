const path = require('path');
const fs = require('fs');

const getEvents = (req, res) => {
  const filePath = path.join(__dirname, '../data/mockData.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not load events' });
    }

    const events = JSON.parse(data);
    res.json(events);
  });
};

module.exports = { getEvents };
