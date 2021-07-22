const Joi = require('joi');

const { rexexp, userRoles } = require('../../constants');

module.exports = {
    createUser: Joi.object().keys({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().regex(rexexp.EMAIL_REGEXP).required(),
        age: Joi.number().min(1).max(120),
        password: Joi.string().regex(rexexp.PASSWORD_REGEX).required(),
        role: Joi.string().allow(...Object.values(userRoles))
    }),

    updateUser: Joi.object().keys({
        name: Joi.string().min(3).max(50),
        age: Joi.number().min(1).max(120),
        role: Joi.string().allow(...Object.values(userRoles))
    })
};
