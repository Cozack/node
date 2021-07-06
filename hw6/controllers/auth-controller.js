const { User, OAuth } = require('../dataBase/models');
const { passwordHasherService, authService } = require('../services');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');
const { AUTHORIZATION } = require('../constants/configuration');

module.exports = {
    isEmailOrPasswordWrong: async (req, res) => {
        try {
            const { password, email } = req.body;

            const userByEmail = await User.findOne({ email }).select('+password');

            if (!userByEmail) {
                throw new ErrorHandler(
                    responseCode.NOT_FOUND,
                    errorMessages.WRONG_EMAIL_OR_PASSWORD.message,
                    errorMessages.WRONG_EMAIL_OR_PASSWORD.code
                );
            }
            await passwordHasherService.compare(userByEmail.password, password);

            res.json(userByEmail);
        } catch (e) {
            res.json(e.message);
        }
    },

    login: async (req, res, next) => {
        try {
            if (!req.user) {
                throw new ErrorHandler(
                    responseCode.NOT_FOUND,
                    errorMessages.WRONG_EMAIL_OR_PASSWORD.message,
                    errorMessages.WRONG_EMAIL_OR_PASSWORD.code
                );
            }

            const { password: hashPassword, _id } = req.user;
            const { password } = req.body;

            await passwordHasherService.compare(hashPassword, password);

            const tokenPair = authService.generateTokenPair();

            await OAuth.create({
                ...tokenPair,
                user: _id
            });

            res.json({
                ...tokenPair,
                user: req.user
            });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await OAuth.remove({ accessToken: token });
            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },

    refresh: async (req, res, next) => {
        try {
            const { _id } = req.user;
            const token = req.get(AUTHORIZATION);

            const tokenPair = authService.generateTokenPair();

            await OAuth.remove({ refreshToken: token });
            await OAuth.create({
                ...tokenPair,
                user: _id
            });

            res.json({
                ...tokenPair,
                user: req.user
            });
        } catch (e) {
            next(e);
        }
    }
};
