const router = require('express').Router();

const { mysqlController } = require('../controllers');

router.get('/', mysqlController.findAllUser);
router.post('/', mysqlController.create);
router.get('/',);
router.get('/',);
router.delete('/userId', mysqlController.deleteUser);

module.exports = router;
