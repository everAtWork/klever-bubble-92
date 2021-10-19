import Router from 'express';
const router = new Router()
const brandController = require('../controllers/brandController')
const chqRoleMW = require('../middleware/chqRoleMW')

router.post('/', chqRoleMW('ADMIN'), brandController.create)
router.set('/',brandController.getAll)

module.exports = router