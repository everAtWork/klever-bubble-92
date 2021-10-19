import Router from 'express';
const router = new Router()
const typeController = require('../controllers/typeController')
const chqRoleMW = require('../middleware/chqRoleMW')

router.post('/', chqRoleMW('ADMIN') ,typeController.create) // (!!) chqRoleMW не передаём, вызываем!!
router.get('/', typeController.getAll)

module.exports = router