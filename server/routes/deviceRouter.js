import Router from 'express';
const productController = require('../controllers/productController')
const router = new Router()
const chqRoleMW = require('../middleware/chqRoleMW')

router.post('/', chqRoleMW('ADMIN'),    productController.create)
router.get('/',productController.getAll)
router.get('/:id',productController.getSingleProduct)

module.exports = router