const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
require('dotenv').config({ path: '../.env' });

const { _mongooseConnector } = require('./dataBase');

const { authRouter, userRouter, mysqlRouter } = require('./routes');
const { configuration, responseCodes, errors } = require('./constants');
const { sequelize } = require('./dataBase/MySQL');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use(fileupload({}));
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/mysql', mysqlRouter);

app.use('*', (_notFoundHandler));
app.use(_handleErrors);

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
    res
        .status(err.status || 400)
        .json({
            message: err.message || errors.NOT_FOUND,
            customCode: err.code || 0
        });
}

function _notFoundHandler(err, req, res, next) {
    next({
        status: err.status || responseCodes.NOT_FOUND,
        message: err.message || errors.NOT_FOUND
    });
}

(async () => {
    await sequelize.sync();

    app.listen(configuration.PORT, () => {
        console.log(configuration.DB_LOCAL_HOST);
    });
})();
