// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     user: 'root',
//     password: 'Martyska_08',
//     database: 'feb-2021',
//     host: 'localhost'
// });
//
// module.exports = connection.promise();
const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('test_sync', 'root', 'Martyska_08', {
    dialect: 'mysql',
    logging: false
});
