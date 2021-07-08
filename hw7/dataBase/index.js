const mongoose = require('mongoose');
const { configuration } = require('../constants');

module.exports._mongooseConnector = () => {
    mongoose.connect(configuration.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};
