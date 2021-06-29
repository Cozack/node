const router = require('express').Router();

const homePageController = require('../controllers/homePageController');

router.get('/', homePageController.homePage);

// router.get('/register', (req, res) => {
//     res.render('register');
// });

module.exports = router;
