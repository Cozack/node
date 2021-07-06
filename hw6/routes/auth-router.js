const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware, userMiddleware } = require('../middlewares');

router.post('/', authMiddleware.checkUserCredentialsValid, authController.isEmailOrPasswordWrong);
router.post('/login', userMiddleware.getUserByDynamicParam('email'), authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefReshToken, authController.refresh);

module.exports = router;
