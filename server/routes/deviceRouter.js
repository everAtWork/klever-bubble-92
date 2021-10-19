import Router from 'express';
const productController = require('../controllers/productController')
const router = new Router()

router.post('/',productController.create)
router.get('/',productController.getAll)
router.get('/:id',productController.getSingleProduct)

module.exports = router