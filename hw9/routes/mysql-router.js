const router = require('express').Router();

const { mysqlController } = require('../controllers');

router.get('/', mysqlController.findAllUser);
router.post('/', mysqlController.create);
router.get('/:id', mysqlController.findOne);
router.put('/:id', mysqlController.updateUser);
router.delete('/:id', mysqlController.deleteUser);

module.exports = router;
