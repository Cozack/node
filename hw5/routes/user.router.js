const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddleware.IsUserExist, userController.getUserById);

router.post('/', userMiddleware.checkUserValidity, userMiddleware.isUserRegistered, userController.createUser);

router.put('/:userId', userMiddleware.IsUserExist, userController.updateUserById);

router.delete('/:userId', userMiddleware.IsUserExist, userController.deleteUserById);

module.exports = router;
