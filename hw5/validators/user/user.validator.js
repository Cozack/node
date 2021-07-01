const Joi = require('joi');

const { rexexp, userRoles } = require('../../constants');

module.exports = {
    createUser: Joi.object().keys({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().regex(rexexp.EMAIL_REGEXP),
        age: Joi.number().min(1).max(120),
        password: Joi.string().regex(rexexp.PASSWORD_REGEX).required(),
        role: Joi.string().allow(...Object.values(userRoles))
    })
};
