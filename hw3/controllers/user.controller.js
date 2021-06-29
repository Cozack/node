const { userService } = require('../services');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await userService.getAll();
    res.json(users);
  },

  getUserById: (req, res) => {
    res.json(req.user);
  },

  createUser: async (req, res) => {
    await userService.addUser(req.body);
    res.json('new user created');
  },
  updateUserById: async (req, res) => {
    const { userId } = req.params;
    await userService.updateUser(userId);
    res.json(`User ${userId} updated`);
  },
  deleteUserById: async (req, res) => {
    const { userId } = req.params;
    await userService.deleteUser(userId);
    res.json(`user ${userId} deleted`);
  }
};
