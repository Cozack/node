const { User } = require('../dataBase/models');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');

module.exports = {
  IsUserExist: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userById = await User.findById(userId);

      if (!userById) {
        throw new ErrorHandler(responseCode.NOT_FOUND, errorMessages.USER_NOT_FOUND, 4041);
      }

      req.user = userById;
      next();
    } catch (e) {
      next(e);
    }
  },

  isUserRegistered: async (req, res, next) => {
    try {
      const users = await User.find({});
      const findUser = users.find((user) => user.email === req.body.email);

      if (findUser) {
        throw new ErrorHandler(responseCode.USER_ALREADY_EXIST, errorMessages.USER_ALREADY_EXIST, 4090);
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
