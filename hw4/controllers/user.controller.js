const { User } = require('../dataBase/models');
const { responseCodes } = require('../constants');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find({});

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res) => {
        res.json(req.user);
    },

    createUser: async (req, res, next) => {
        try {
            await User.create(req.body);

            res.status(responseCodes.CREATED).json('new user created');
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await User.findByIdAndUpdate({ _id: userId }, req.body);

            res.json(`User ${userId} updated`);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await User.findByIdAndDelete({ _id: userId });

            res.json(`user ${userId} deleted`);
        } catch (e) {
            next(e);
        }
    }
};
