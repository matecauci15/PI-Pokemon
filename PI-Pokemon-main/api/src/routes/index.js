const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {createPokemonHandler, getPokemonHandler, getPokemonIdHandler, deletePokemonByIdHandler} = require("../Handlers/pokemonsHandler")
const {getTypesHandler} = require("../Handlers/typeHandler")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/pokemons', createPokemonHandler);
router.get('/pokemons', getPokemonHandler);
router.get('/pokemons/:name', getPokemonHandler);
router.get('/types', getTypesHandler);
router.get('/pokemons/:id', getPokemonIdHandler);
router.delete('/delete/:id', deletePokemonByIdHandler);

module.exports = router;
