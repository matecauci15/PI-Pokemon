// const getPokemonIdHandler = async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const pokemonID = await getPokemonsById(id);
//         return res.status(200).json(pokemonID);
//     } catch (error) {
//         console.error('Error en getIdPokemon(handlers):', error);
//         return res.status(500).json({error: 'No existe un pokemon con el ID proporcionado'});
//     }
// };
// module.exports = {createPokemonHandler, getPokemonHandler, getPokemonIdHandler};

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
    try {
        const {id} = req.params;
        const pokeId = await pokemonsById(id);
        return res.status(200).json(pokeId);
    } catch (error) {
        return res.status(500).json(error.message, {error: 'No existe un pokemon con el ID proporcionado'});
    }
};
            
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
    // getNamePokemon,
    deletePokemon,
    createPokemon
}