const express = require('express');

const { _mongooseConnector } = require('./dataBase');

const { userRouter } = require('./routes');
const { configuration, responseCode } = require('./constants');
const { errorMessages } = require('./errors');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use('*', (_notFoundHandler));
app.use(_handleErrors);

app.listen(configuration.PORT, () => {
  console.log(configuration.DB_LOCAL_HOST);
});

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
  res
    .status(err.status)
    .json({
      message: err.message || errorMessages.SOMETHING_NOT_FOUND,
      customCode: err.code || errorMessages.RECORD_NOT_FOUND
    });
}

function _notFoundHandler(err, req, res, next) {
  next({
    status: err.status || responseCode.NOT_FOUND,
    message: err.message || errorMessages.SOMETHING_NOT_FOUND
  });
}
