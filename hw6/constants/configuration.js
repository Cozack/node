module.exports = {
    PORT: process.env.PORT || 3000,
    DB_LOCAL_HOST: 'localhost 3000',
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/2021',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'Refresh Secret',
    AUTHORIZATION: 'Authorization',
    ACCESS_TOKEN_TYPE: 'access',
    REFRESH_TOKEN_TYPE: 'refresh',
    ACCESS_TOKEN_EXPIRES_TIME: '10m',
    REFRESH_TOKEN_EXPIRES_TIME: '15d'
};
