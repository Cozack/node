const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../constants/configuration');

const verifyPromise = promisify(jwt.verify);

module.exports = {
    generateTokenPair: () => {
        const accessToken = jwt.sign({}, ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
        const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, { expiresIn: '15d' });

        return {
            accessToken,
            refreshToken
        };
    },

    verifyToken: async (token, tokenType = 'access') => {
        const secretWord = tokenType === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
        const verify = await verifyPromise(token, secretWord);

        console.log(verify);
    }
};