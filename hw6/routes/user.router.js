const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware, authMiddleware } = require('../middlewares');
const { userValidators: { updateUser, createUser } } = require('../validators');

router.get('/', userController.getAllUsers);

router.post('/',
    userMiddleware.checkIsUserBodyValid(createUser),
    userMiddleware.isUserRegistered,
    userController.createUser);

router.use('/:userId', userMiddleware.IsUserExist);

router.get('/:userId', userController.getUserById);

router.put('/:userId',
    userMiddleware.checkIsUserBodyValid(updateUser),
    authMiddleware.checkAccessToken,
    userController.updateUserById);

router.delete('/:userId', authMiddleware.checkAccessToken, userController.deleteUserById);

module.exports = router;
