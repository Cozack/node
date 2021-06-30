const { User } = require('../dataBase/models');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');

module.exports = {
    IsUserExist: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const userById = await User.findById(userId);

            if (!userById) {
                // eslint-disable-next-line max-len
                throw new ErrorHandler(responseCode.NOT_FOUND, errorMessages.USER_NOT_FOUND.message, errorMessages.USER_NOT_FOUND.code);
            }

            req.user = userById;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserRegistered: async (req, res, next) => {
        try {
            const findUser = await User.findOne({ email: req.body.email });

            if (findUser) {
                // eslint-disable-next-line max-len
                throw new ErrorHandler(responseCode.USER_ALREADY_EXIST, errorMessages.USER_ALREADY_EXIST.message, errorMessages.USER_ALREADY_EXIST.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
