import axios from "axios"
import { GET_POKEMONS, GET_TYPES } from "./actionsTypes";


// state pq quiero que reciba la info del form
//dispatch conecta el componente con laas actions, lleva la info del componente al action y del action al reducer
export function postPokemon(state){
    return async function(dispatch){
        try {
            await axios.post('http://localhost:3001/pokemons/', state)

        } catch (error) {
            console.log(error);
        }
    }
}
export function getPokemon(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/pokemons/')
            dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTypes(){
    return async (dispatch)=>{
        try {
            const {data} = await axios.get('http://localhost:3001/types')
            dispatch({
                type: GET_TYPES,
                payload: data
            })
        } catch (error) {
            console.log(error.message);           
        }
    }
}