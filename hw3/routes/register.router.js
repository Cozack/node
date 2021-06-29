const router = require('express').Router();

const { registerController } = require('../controllers');

router.get('/register', registerController.registerPage);

// router.post('/register', registerController.newUser);

module.exports = router;
