module.exports = {
    PORT: process.env.PORT || 3000,
    DB_LOCAL_HOST: 'localhost 3000',
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'asdasdd',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'Refresh Secret',
    AUTHORIZATION: 'Authorization',
    ACCESS_TOKEN_TYPE: 'access',
    REFRESH_TOKEN_TYPE: 'refresh',
    ACCESS_TOKEN_EXPIRES_TIME: '10m',
    REFRESH_TOKEN_EXPIRES_TIME: '15d',
    SYSTEM_EMAIL: process.env.SYSTEM_MAIL || 'no reply',
    SYSTEM_EMAIL_PASSWORD: process.env.SYSTEM_MAIL_PASSWORD || 'no reply password',
    GMAIL: 'gmail',

    PHOTO_MAX_SIZE: 2 * 1024 * 1024, // 2MB
    FILE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
    VIDEO_MAX_SIZE: 15 * 1024 * 1024, // 15MB

    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp'
    ],

    DOCS_MIMETYPES: [
        'application/msword', // DOC
        'application/pdf', // PDF
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLS
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOC 2007
    ],

    VIDEOS_MIMETYPES: ['video/mpeg', 'video/mp4']
};
