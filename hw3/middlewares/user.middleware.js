const { userService } = require('../services');

module.exports = {
  IsUserExist: async (req, res, next) => {
    const { userId } = req.params;
    const userById = await userService.getUserById(userId);
    if (!userById) {
      throw new Error('user not found');
    }
    req.user = userById;
    next();
  },

  isUserRegistered: async (req, res, next) => {
    const users = await userService.getAll();
    const findUser = users.find((user) => user.email === req.body.email);
    if (findUser) {
      throw new Error('this user is already login');
    }
    next();
  }
};
