const router = require('express').Router();
const { loginController } = require('../controllers');

router.get('/login', (req, res) => {
  res.render(loginController.login);
});

// eslint-disable-next-line no-unused-vars
router.post('/login', async (req, res) => {

});

module.exports = router;
