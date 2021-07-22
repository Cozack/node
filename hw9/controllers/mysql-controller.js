// const { Op } = require('sequelize');

const { UserModel } = require('../dataBase/MySQL/models');
const { sequelize } = require('../dataBase/MySQL');

module.exports = {
    findAllUser: async (req, res, next) => {
        try {
            const users = await UserModel.findAll({});

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { id } = req.params;

            await UserModel.update(req.body, {
                where: {
                    id
                }
            });

            res.status(201).json('user updated');
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            console.log(req.params);

            await UserModel.destroy({
                where: {
                    id
                }
            });

            res.status(201).json('user deleted');
        } catch (e) {
            next(e);
        }
    },

    findOne: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await UserModel.findByPk(id);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    create: async (req, res, next) => {
        const transaction = await sequelize.transaction();

        try {
            const { id, name } = await UserModel.create(req.body, { transaction });

            await UserModel.update({ name }, {
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
