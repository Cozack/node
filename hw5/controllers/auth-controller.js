const { User } = require('../dataBase/models');
const { passwordHasher } = require('../helpers');
const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');

module.exports = {
    isEmailOrPassswordWrong: async (req, res) => {
        try {
            const { password, email } = req.body;

            const userByEmail = await User.findOne({ email }).select('+password');

            if (!userByEmail) {
                // eslint-disable-next-line max-len
                throw new ErrorHandler(responseCode.NOT_FOUND, errorMessages.WRONG_EMAIL_OR_PASSWORD.message, errorMessages.WRONG_EMAIL_OR_PASSWORD.code);
            }
            await passwordHasher.compare(userByEmail.password, password);

            res.json(userByEmail);
        } catch (e) {
            res.json(e.message);
        }
    }
};
