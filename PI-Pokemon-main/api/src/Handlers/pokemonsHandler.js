const {getAllPokemons, pokemonCreate, pokemonsById, pokemonsByName, deletePokemonById} = require('../Controllers/pokemonController')

const createPokemon = async(req, res)=>{
    try {
        const {
            name,
            image, 
            hp, 
            attack, 
            defense, 
            speed, 
            height, 
            weight,  
            types 
        } = req.body
        const pokemonPost = await pokemonCreate(name,image, hp, attack, defense, speed, height, weight, types);
        
        return res.status(200).json(pokemonPost);
        
    } catch (error) {
        return res.status(400).json(error .message );
    }
}

const getPokemons = async(req, res)=>{
    try {
        const {name} = req.query;
        if(name){
            const response = await pokemonsByName(name);
            return res.status(200).json(response);
        }
        const allPokes = await getAllPokemons()
        return res.status(200).json(allPokes);
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

            
const getPokemonById = async(req, res)=>{
        const {id} = req.params;
    try {
        const pokeId = await pokemonsById(id);
        return res.status(200).json(pokeId);
    } catch (error) {
        return res.status(400).json(error.message, {error: 'No existe un pokemon con el ID proporcionado'});
    }
};
// const getPokemonId = async (id) => {
//     if (isNaN(id)) {
//       const pokemonsId = await Pokemon.findByPk(id);
//       return pokemonsId; 
//     }
  
//     const apiResponse = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")).data.results;
//     const pokeId = apiResponse.find((pokemon) => pokemon.url.endsWith(`/${id}/`));
//     if(!pokeId) return ("Couldn't find any pokemon with the specified id");
//     return pokeId;
//   }

//buscar para hacer
const deletePokemon = async (req, res) => {
        try {
            const { id } = req.params
            const response = await deletePokemonById(id)
            return res.status(200).json(response)
    } catch (error) {
            res.status(400).send(error.message)
                        
    }
 }
                        
module.exports = {
    getPokemons,
    getPokemonById,
    deletePokemon,
    createPokemon
}