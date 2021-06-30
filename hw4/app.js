<<<<<<< HEAD
const express = require('express');

const { _mongooseConnector } = require('./dataBase');

const { userRouter } = require('./routes');
const { configuration, responseCode, error } = require('./constants');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use('*', (_notFoundHandler));
app.use(_handleErrors);

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
    res
        .status(err.status)
        .json({
            message: err.message || error.UNKNOWN_ERROR,
            customCode: err.code || 0
        });
}

function _notFoundHandler(err, req, res, next) {
    next({
        status: err.status || responseCode.NOT_FOUND,
        message: err.message || error.UNKNOWN_ERROR
    });
}

app.listen(configuration.PORT, () => {
    console.log(configuration.DB_LOCAL_HOST);
});
=======
const express = require('express');

const { _mongooseConnector } = require('./dataBase');

const { userRouter } = require('./routes');
const { configuration, responseCode, error } = require('./constants');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use('*', (_notFoundHandler));
app.use(_handleErrors);

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
    res
        .status(err.status)
        .json({
            message: err.message || error.UNKNOWN_ERROR,
            customCode: err.code || 0
        });
}

function _notFoundHandler(err, req, res, next) {
    next({
        status: err.status || responseCode.NOT_FOUND,
        message: err.message || error.NOT_FOUND
    });
}

app.listen(configuration.PORT, () => {
    console.log(configuration.DB_LOCAL_HOST);
});
>>>>>>> a79e968 (hw 4)
