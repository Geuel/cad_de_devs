const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

/* Métodos HTTP: GET, POST, PUT, DELETE

 Tipos de Parâmetros:
 
 Query Params: req.query (Filtros, ordenação, paginação...)
 Router Params: req.params (Indentificar um recurso na alteração ou remoção)
 Body: req.body (Dados para criação ou alteração de um registro)
 */
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.get('/search', SearchController.index)  

module.exports = routes