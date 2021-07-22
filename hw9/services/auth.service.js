const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { ACCESS_TOKEN_EXPIRES_TIME, REFRESH_TOKEN_EXPIRES_TIME } = require('../constants/configuration');

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_TYPE, REFRESH_TOKEN_SECRET } = require('../constants/configuration');

const verifyPromise = promisify(jwt.verify);

module.exports = {
    generateTokenPair: () => {
        const accessToken = jwt.sign({}, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_TIME });
        const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES_TIME });

        return {
            accessToken,
            refreshToken
        };
    },

    verifyToken: async (token, tokenType = ACCESS_TOKEN_TYPE) => {
        const secretWord = tokenType === ACCESS_TOKEN_TYPE ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
        const verify = await verifyPromise(token, secretWord);

        console.log(verify);
    }
};
