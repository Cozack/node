const fs = require('fs');
const util = require('util');

const { configuration } = require('../constants');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function getAllUsers() {
  const data = await readFile(configuration.DB);
  if (!data) {
    throw new Error('DB is now allowed');
  }
  return JSON.parse(data.toString());
}

module.exports = {
  getAll: getAllUsers,

  getUserById: async (userId) => {
    const users = await getAllUsers();
    const findUser = users.find((user) => user.id === +userId);

    if (!findUser) {
      throw new Error('This user not exist');
    }
    return findUser;
  },

  addUser: async (addUser) => {
    const users = await getAllUsers();
    const foundUser = users.some((user) => user.email === addUser.email);
    if (foundUser) {
      throw new Error('this user already created');
    }
    users.push({ ...addUser, id: users.length + 1 });
    await writeFile(configuration.DB, JSON.stringify(users));
  },

  deleteUser: async (userId) => {
    const users = await getAllUsers();
    const newUsers = users.filter((user) => user.id !== +userId);
    await writeFile(configuration.DB, JSON.stringify(newUsers));
  },

  updateUser: async (userId, newUserDetails) => {
    const users = await getAllUsers();
    const newUser = users.filter((user) => user.id !== +userId);
    newUser.push({ ...newUserDetails, id: +userId });
    await writeFile(configuration.DB, JSON.stringify(newUser));
  }
};
