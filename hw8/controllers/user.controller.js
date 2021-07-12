const { User } = require('../dataBase/models');
const { responseCodes, emailActionsEnum, itemTypes } = require('../constants');
const { passwordHasherService, mailService } = require('../services');
const { _photoDirBuilder, userHelper } = require('../helpers');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find({}).lean();

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
            const { avatar } = req;

            const hashedPassword = await passwordHasherService.hash((password));
            const createdUser = await User.create({ ...req.body, password: hashedPassword });
            const { _id } = createdUser;

            if (avatar) {
                const { finalPath, photoPath } = await _photoDirBuilder(avatar.name, _id, itemTypes.USERS, itemTypes.AVATAR);
                await avatar.mv(finalPath);

                await User.updateOne({ _id }, { avatar: photoPath });
            }

            const normalizedUser = userHelper.userNormalizator(createdUser.toJSON());

            await mailService.sendMail(email, emailActionsEnum.WELCOME, { userName: name });

            res.status(responseCodes.CREATED).json(normalizedUser);
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
    },

    addNewImages: async (req, res, next) => {
        try {
            const [image] = req.photos;
            const { _id } = req.user;

            if (image) {
                const { finalPath, photoPath } = await _photoDirBuilder(image.name, _id, itemTypes.USERS, itemTypes.IMAGES);
                await image.mv(finalPath);

                await User.findByIdAndUpdate({ _id }, { $push: { images: photoPath } });
            }
            res.status(responseCodes.UPDATED).json('user updated');
        } catch (e) {
            next(e);
        }
    }
};
