const Router = require('express').Router()
const controller = require('../controllers/ConcertsController')

Router.get('/', controller.GetConcerts)
Router.post('/create', controller.CreateConcert)
Router.put('/:concerts_id', controller.UpdateConcert)
Router.delete('/:concerts_id', controller.DeleteConcert)

module.exports = Router