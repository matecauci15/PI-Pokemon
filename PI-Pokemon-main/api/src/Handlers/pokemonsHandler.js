const {createPokemon, getPokemon, getPokemonId, deletePokemonById} = require("../Controllers/pokemonController")
 
const createPokemonHandler = async (req, res) => {
    try {
        const {        
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            type
        } = req.body;
        const response = await createPokemon(name,image,life,attack,defense,speed,height,weight, type)
        res.status(201).json(response)
    } catch (error) {
        return res.status(400).send(error.message)  
    }
}

const getPokemonHandler = async (req, res) => {
    try {
        const {name} = req.query
        const response = await getPokemon(name);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getPokemonIdHandler = async (req, res) => {
    try {
        const {id} = req.params
        const response = await getPokemonId(id)
        res.status(200).json(response) 
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
const deletePokemonByIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        const response = await deletePokemonById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error.message)

    }
}

module.exports = {createPokemonHandler, getPokemonHandler, getPokemonIdHandler, deletePokemonByIdHandler};