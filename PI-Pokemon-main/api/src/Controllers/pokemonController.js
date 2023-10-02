const {Pokemon} = require("../db")
const axios = require("axios")
 
const createPokemon = async(
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight
) => {
    // want to use findOrCreate but some api actualizations are needed
    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight
    })
    return newPokemon;
}

const dbPokemons = async () => {
    const pokemonsDb = await Pokemon.findAll()
    return pokemonsDb;
    // console.log(pokemonsDb);
}

const apiPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200");
    return data;
}
const getPokemon = async (name) => {
    const pokemonDb = await dbPokemons()
    const apiResponse = await apiPokemons()
    const pokemonsApi = apiResponse.results
    
    const allPokemons = [...pokemonsApi, ...pokemonDb]

    if(name){
    const pokemonByName = allPokemons.filter((pokemon) => pokemon.name && pokemon.name.toLowerCase().includes(name.toLowerCase()) )
    return pokemonByName
    }
    return allPokemons;
}

// const getPokemonId = async (id) => {
//     if(isNaN(id)){
//         const pokemonsId = await Pokemon.findByPk(id)
//         return pokemonsId; 
//     }
//     const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")).data.results;
//     const pokeId = apiResponse.find((pokemon) => pokemon.id === +id)
//     console.log(pokeId);
//     return pokeId
// }   
const getPokemonId = async (id) => {
    if (isNaN(id)) {
      const pokemonsId = await Pokemon.findByPk(id);
      return pokemonsId; 
    }
  
    const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")).data.results;
    const pokeId = apiResponse.find((pokemon) => pokemon.url.endsWith(`/${id}/`));
    if(!pokeId) return ("Couldn't find any pokemon with the specified id");
    // console.log(pokeId);
    return pokeId;
  }
  
// const getPokemonId = async (id) => {
//     if (isNaN(id)) {
//       const pokemonsId = await Pokemon.findByPk(id);
//       return pokemonsId; 
//     }
  
//     const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")).data.results;
//     const pokeId = apiResponse.find((pokemon) => {
//       const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
//       return parseInt(pokemonId) === parseInt(id);
//     });
  
//     console.log(pokeId);
//     return pokeId;
//   }
  
const deletePokemonById = async (id) => {
    const pokemon = await Pokemon.findOne({where: {id: id}})
        if(pokemon){
            await Pokemon.destroy({where: {id:id}})
            return 'El pokemon fue eliminado con exito'
    }
}

module.exports = {createPokemon, getPokemon, getPokemonId, deletePokemonById}