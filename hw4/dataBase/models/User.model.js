const { Schema, model } = require('mongoose');

const { userRoles, dataBaseTableEnum } = require('../../constants');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: String,
        default: 20
    },
    role: {
        type: String,
        enum: Object.values(userRoles),
        default: userRoles.USER
    }
}, { timestamps: true });

module.exports = model(dataBaseTableEnum.USER, userSchema);
