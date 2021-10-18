import Router from 'express';
import { Model } from 'sequelize/types';
const router = new Router()
const userController = require('../controllers/userController').default
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.chq)

module.exports = router