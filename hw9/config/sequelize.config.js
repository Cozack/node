const {
    DB_USER_NAME, DB_USER_PASSWORD, DB_MYSQL_NAME, DB_HOST_IP_ADDRESS, DB_MYSQL_DIALECT
} = require('../constants/configuration');

module.exports = {
    development: {
        username: DB_USER_NAME,
        password: DB_USER_PASSWORD,
        database: DB_MYSQL_NAME,
        host: DB_HOST_IP_ADDRESS,
        dialect: DB_MYSQL_DIALECT
    }
};
