// const { Op } = require('sequelize');

const { UserModel } = require('../dataBase/MySQL/models');
const { sequelize } = require('../dataBase/MySQL');

module.exports = {
    findAllUser: async (req, res, next) => {
        try {
            const { name } = req.query;
            const users = await UserModel.findAll({
                where: {
                    name
                }
            });

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await UserModel.update(req.body, {
                where: {
                    id: userId
                }
            });

            res.status(201).json('user updated');
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await UserModel.destroy({
                where: {
                    id: userId
                }
            });

            res.status(201).json('user deleted');
        } catch (e) {
            next(e);
        }
    },

    findOne: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await UserModel.findByPk(userId);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    create: async (req, res, next) => {
        const transaction = await sequelize.transaction();

        try {
            const { id } = await UserModel.create(req.body, { transaction });

            await UserModel.update({ name: 'max' }, {
                where: { id },
                transaction
            });

            await transaction.commit();
            res.json(id);
        } catch (e) {
            await transaction.rollback();
            next(e);
        }
    }
};
