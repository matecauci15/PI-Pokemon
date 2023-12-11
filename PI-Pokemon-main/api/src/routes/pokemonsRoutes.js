const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById, deletePokemon } = require('../Handlers/pokemonsHandler');

const pokemonsRouter = Router();


pokemonsRouter.get('/', getPokemons);
pokemonsRouter.get('/:id', getPokemonById);
pokemonsRouter.delete('/:id', deletePokemon);
pokemonsRouter.post('/', createPokemon);

// pokemonsRouter.get('/:type', getPokeType)
// pokemonsRouter.get('/:origin', getPokeOrigin)
// pokemonsRouter.get('/:attack', getPokeAttack)


module.exports = pokemonsRouter