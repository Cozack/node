const { OAuth } = require('../dataBase/models');
const { authService } = require('../services');
const { configuration, responseCodes } = require('../constants');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { _id } = req.user;

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
            const token = req.get(configuration.AUTHORIZATION);

            await OAuth.remove({ accessToken: token });

            res.sendStatus(responseCodes.DELETED);
        } catch (e) {
            next(e);
        }
    },

    refresh: async (req, res, next) => {
        try {
            const { _id } = req.user;
            const token = req.get(configuration.AUTHORIZATION);

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
