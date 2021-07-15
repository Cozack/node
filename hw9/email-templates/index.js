const { emailActionsEnum } = require('../constants');

module.exports = {
    [emailActionsEnum.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board',
        imageName: 'registered.jpg'
    },
    [emailActionsEnum.UPDATED_USER]: {
        templateName: 'updatedUser',
        subject: 'data updated',
        imageName: 'updated.jpg'
    },
    [emailActionsEnum.DELETED_USER]: {
        templateName: 'deletedUser',
        subject: 'user deleted',
        imageName: 'deleted.jpg'
    }
};
