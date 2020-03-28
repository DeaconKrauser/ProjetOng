const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

/**
 * LISTAGEM DA TABLE ONG
 */
routes.get('/ongs', OngController.index);
/**
 * INSERT TABLE ONG
 */
routes.post('/ongs', OngController.create);

/**
 * PROFILE CONTROLER
 */

routes.get('/profile', ProfileController.index);

/**
 * LISTAGEM DA TABLE INCIDENT 
 */
routes.get('/incidents', IncidentController.index);
/**
 * ISERÇÃO NA TABLE INCIDENT
 */
routes.post('/incidents', IncidentController.create);

/**
 * DELETE TABLE
 */
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
