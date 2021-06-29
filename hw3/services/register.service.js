const fs = require('fs');
const util = require('util');
const path = require('path');
const db = require('../dataBase/users.json');

const writeFile = util.promisify(fs.writeFile);
const dbPath = path.join(__dirname, '..', 'dataBase', 'users.json');

module.exports = {
  newUser: (body) => {
    db.push(body);
    writeFile(dbPath, JSON.stringify(db));

    return db;
  }
};
