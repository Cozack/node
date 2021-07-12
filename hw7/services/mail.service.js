const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { errorMessages, ErrorHandler } = require('../errors');
const responseCode = require('../constants/response-codes');
const { SYSTEM_EMAIL, SYSTEM_EMAIL_PASSWORD, GMAIL } = require('../constants/configuration');
const templateInfo = require('../email-templates');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const transporter = nodemailer.createTransport({
    service: GMAIL,
    auth: {
        user: SYSTEM_EMAIL,
        pass: SYSTEM_EMAIL_PASSWORD
    }
});

const sendMail = async (userMail, action, context = {}) => {
    const templateToSend = templateInfo[action];

    if (!templateToSend) {
        throw new ErrorHandler(
            responseCode.WRONG_TEMPLATE,
            errorMessages.WRONG_TEMPLATE.message,
            errorMessages.WRONG_TEMPLATE.code
        );
    }

    const html = await templateParser.render(templateToSend.templateName, context);
    return transporter.sendMail({
        from: 'No reply',
        to: userMail,
        subject: templateToSend.subject,
        html,
        attachments: [{
            ...(templateToSend.imageName && {
                filename: templateToSend.imageName,
                path: path.join(process.cwd(), 'public', templateToSend.imageName),
                cid: templateToSend.imageName
            })
        }]

    });
};

module.exports = {
    sendMail
};
