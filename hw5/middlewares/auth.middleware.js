const authValidator = require('../validators/auth/auth.validator');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');

module.exports = {
    checkUserCredentialsValid: (req, res, next) => {
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
    }
};
