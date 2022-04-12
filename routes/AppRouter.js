const Router = require('express').Router()
const SongsRouter = require('./SongsRouter')
const RauwRouter = require('./RauwRouter')
const ConcertsRouter = require('./ConcertsRouter')
Router.use('/songs', SongsRouter)
Router.use('/rauw', RauwRouter)
Router.use('/concerts', ConcertsRouter)
module.exports = Router
