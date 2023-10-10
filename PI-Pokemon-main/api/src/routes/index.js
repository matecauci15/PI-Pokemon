const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getTypesHandler} = require("../Handlers/typeHandler")
const { getPokemons, createPokemon, getPokemonById, deletePokemon } = require('../Handlers/pokemonsHandler');


const router = Router();

router.get('/types', getTypesHandler);
router.delete('/pokemons/:id', deletePokemon);
router.get('/pokemons/', getPokemons);
router.get('/pokemons/:id', getPokemonById);
router.post('/pokemons', createPokemon);

module.exports = router;
