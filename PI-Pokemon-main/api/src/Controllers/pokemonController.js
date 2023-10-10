

const axios = require('axios');

const {Pokemon, Type} = require('../db')


const apiPokemons = async()=>{
  const  apiResponse =  (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')).data.results
  
  // Promise.all = Es un iterador de promesas que resuelve las promesas y devuelve una promesa
  const pokeapi = await Promise.all(apiResponse.map(async (poke)=>{
    let pokemon = await axios.get(poke.url);
    
    return {
      id: pokemon.data.id,
      image: pokemon.data.sprites.other.home.front_default,
      name: pokemon.data.name,
      hp: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      speed: pokemon.data.stats[5].base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      types: pokemon.data.types.map((tipo) => tipo.type.name),
    }
  }))
  
  return pokeapi
};

const dbPokemons = async()=>{
  const pokemonsDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
  
  const pokemons = pokemonsDb?.map( pokemon => {
    return {
      id: pokemon.id,
      image: pokemon.image,
      name: pokemon.name,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map( types => types.name),
    };
  });
  return pokemons;   
  
};

const getAllPokemons = async () => {
  const pokeDb = await dbPokemons(); // Obtener datos de la base de datos
  const pokeApi = await apiPokemons(); // Obtener datos de la API
  
  // Realiza la unión de datos, por ejemplo, fusiona los arrays o realiza alguna lógica específica según tus necesidades
  const allPokemons = [ ...pokeApi, ...pokeDb];
  
  return allPokemons;
};

const pokemonsById = async(id)=>{
  const pokeId = (await getAllPokemons()).find((pokemon)=> pokemon.id == id);
  
  if(!pokeId) return ("Couldn't find any pokemon with the specified id")
  
  return pokeId
}

const pokemonsByName = async(name)=>{
  const pokemons = await getAllPokemons();
  
  const pokeName = pokemons.filter(poke => poke.name.toLowerCase().includes(name.toLowerCase()));
  if(!pokeName.length) return ("Couldn't find any pokemon with that name")
  
  return pokeName
  
}
const deletePokemonById = async (id) => {
    const pokemon = await Pokemon.findOne({where: {id: id}})    
        if(pokemon){
            await Pokemon.destroy({where: {id:id}})    
            return 'El pokemon fue eliminado con exito'
    }
}

const pokemonCreate = async (
  name,
  image, 
  hp, 
  attack, 
  defense, 
  speed, 
  height, 
  weight, 
  types) => {

        const newPokemon = await Pokemon.create({ 
        name,
        image, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight
      });
    
        types?.forEach(async (type)=>{
            let typesDB = await Type.findAll({where: 
            {
               name : type
            }});

            await newPokemon.addTypes(typesDB);
        });

        return newPokemon
};

module.exports = {
    getAllPokemons,
    pokemonsById,
    pokemonsByName,
    pokemonCreate,
    deletePokemonById
}
