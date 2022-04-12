const Router = require('express').Router()
const controller = require('../controllers/RauwController')

Router.get('/', controller.GetRauw)

module.exports = Router