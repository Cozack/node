const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware, userMiddleware } = require('../middlewares');

router.post('/login', authMiddleware.checkUserBody,
    userMiddleware.getUserByDynamicParam('email'),
    userMiddleware.checkUserPasswordValidity,
    authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefReshToken, authController.refresh);

module.exports = router;
