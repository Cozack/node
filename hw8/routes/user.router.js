const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware, authMiddleware, fileUploadMiddleware } = require('../middlewares');
const { userValidators: { updateUser, createUser } } = require('../validators');

router.get('/', userController.getAllUsers);

router.post('/',
    fileUploadMiddleware.checkFiles,
    fileUploadMiddleware.checkAvatar,
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

router.post('/:userId/images', fileUploadMiddleware.checkFiles, userController.addNewImages);

module.exports = router;
