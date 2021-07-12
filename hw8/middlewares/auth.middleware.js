const authValidator = require('../validators/auth/auth.validator');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');
const { AUTHORIZATION, REFRESH_TOKEN_TYPE } = require('../constants/configuration');
const { authService } = require('../services');
const { OAuth } = require('../dataBase/models');

module.exports = {
    checkUserBody: (req, res, next) => {
        try {
            const { error } = authValidator.loginUser.validate(req.body);

            if (error) {
                const [{ message }] = error.details;

                throw new ErrorHandler(responseCode.NOT_FOUND, message, errorMessages.WRONG_EMAIL_OR_PASSWORD.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                throw new ErrorHandler(
                    responseCode.UNAUTHORIZED,
                    errorMessages.NO_TOKEN.message,
                    errorMessages.NO_TOKEN.code
                );
            }

            await authService.verifyToken(token);

            const tokenObject = await OAuth.findOne({ accessToken: token });

            if (!tokenObject) {
                throw new ErrorHandler(responseCode.UNAUTHORIZED,
                    errorMessages.WRONG_TOKEN.message,
                    errorMessages.WRONG_TOKEN.message);
            }

            req.user = tokenObject.user;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkRefReshToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                throw new ErrorHandler(
                    responseCode.UNAUTHORIZED,
                    errorMessages.NO_TOKEN.message,
                    errorMessages.NO_TOKEN.code
                );
            }

            await authService.verifyToken(token, REFRESH_TOKEN_TYPE);

            const tokenObject = await OAuth.findOne({ refreshToken: token });

            if (!tokenObject) {
                throw new ErrorHandler(responseCode.UNAUTHORIZED,
                    errorMessages.WRONG_TOKEN.message,
                    errorMessages.NO_TOKEN.code);
            }

            req.user = tokenObject.user;
            next();
        } catch (e) {
            next(e);
        }
    }
};
