<<<<<<< HEAD
const mongoose = require('mongoose');

module.exports._mongooseConnector = () => {
    mongoose.connect('mongodb://localhost:27017/2021', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};
=======
const mongoose = require('mongoose');

module.exports._mongooseConnector = () => {
    mongoose.connect('mongodb://localhost:27017/2021', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};
>>>>>>> a79e968 (hw 4)
