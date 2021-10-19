import Router from 'express';
import { Model } from 'sequelize/types';
const authMDWR = require('../middleware/authMiddleware')

const router = new Router()

const userController = require('../controllers/userController').default

router.post('/registration', userController.registration)

router.post('/login', userController.login)
router.get('/auth', authMDWR, userController.chq)

module.exports = router