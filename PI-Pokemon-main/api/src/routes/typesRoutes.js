const {Router} = require('express');
const {getTypesHandler} = require("../Handlers/typeHandler")

const typesRoutes = Router();

typesRoutes.get('/', getTypesHandler)

module.exports = typesRoutes
