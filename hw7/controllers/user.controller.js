const { User } = require('../dataBase/models');
const { responseCodes, emailActionsEnum } = require('../constants');
const { passwordHasherService, mailService } = require('../services');

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
            const { password, email, name } = req.body;

            const hashedPassword = await passwordHasherService.hash((password));
            await User.create({ ...req.body, password: hashedPassword });

            await mailService.sendMail(email, emailActionsEnum.WELCOME, { userName: name });

            res.status(responseCodes.CREATED).json('new user created');
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await User.findByIdAndUpdate({ _id: userId }, req.body);

            const { body: { name }, user: { email } } = req;

            await mailService.sendMail(email, emailActionsEnum.UPDATED_USER, { userName: name });

            res.status(responseCodes.UPDATED).json(`User ${userId} updated`);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await User.findByIdAndDelete({ _id: userId });

            const { body: { name }, user: { email } } = req;

            await mailService.sendMail(email, emailActionsEnum.DELETED_USER, { userName: name });

            res.status(responseCodes.DELETED).json(`user ${userId} deleted`);
        } catch (e) {
            next(e);
        }
    }
};
