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
const {
    DB_USER_NAME, DB_USER_PASSWORD, DB_MYSQL_CONNECTION_NAME, DB_MYSQL_DIALECT
} = require('../../constants/configuration');

module.exports.sequelize = new Sequelize(DB_MYSQL_CONNECTION_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
    dialect: DB_MYSQL_DIALECT,
    logging: false
});
