const Router = require('express').Router()
const controller = require('../controllers/SongsController')

Router.get('/', controller.GetSongs)

module.exports = Router