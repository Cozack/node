const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', authMiddleware.checkUserCredentialsValid, authController.isEmailOrPassswordWrong);

module.exports = router;
