const express = require('express')
const routes = express.Router()
const sessionController = require('./controllers/SessionController')
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const { globalValidator, ongValidator } = require('./validators')

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongValidator.ongValid(), ongController.create)

routes.get(
  '/incidents',
  globalValidator.pageQueryParamNumeric(),
  incidentController.index
)
routes.post('/incidents', incidentController.create)
routes.delete(
  '/incidents/:id',
  globalValidator.idReqParamNumeric(),
  incidentController.delete
)
routes.get(
  '/profile',
  globalValidator.authorizationRequired(),
  profileController.index
)

module.exports = routes
