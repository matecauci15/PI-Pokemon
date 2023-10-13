const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById, deletePokemon } = require('../Handlers/pokemonsHandler');

const pokemonsRouter = Router();


pokemonsRouter.get('/', getPokemons);
pokemonsRouter.get('/:id', getPokemonById);
pokemonsRouter.delete('/:id', deletePokemon);
pokemonsRouter.post('/', createPokemon);

module.exports = pokemonsRouter