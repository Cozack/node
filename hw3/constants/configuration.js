const path = require('path');

module.exports = {
  PORT: 3000,
  DB: path.join(__dirname, '..', 'dataBase', 'users.json')
};
