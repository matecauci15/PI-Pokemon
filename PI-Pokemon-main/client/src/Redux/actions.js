import axios from "axios"
import { GET_POKEMONS, GET_TYPES, GET_POKEMON_NAME, ORDER_BY_NAME, FILTER_BY_ORIGIN, FILTER_BY_TYPE, FILTER_BY_ATTACK, RESET_FILTERS, SELECET_ATTACK, SELECET_ORDER, SELECET_ORIGIN, SELECET_TYPE } from "./actionsTypes";

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
            const response = await axios.get('http://localhost:3001/types')
            dispatch({
                type: GET_TYPES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);           
        }
    }
}

export function getPokemonByName(name){
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
            dispatch({
                type: GET_POKEMON_NAME,
                payload: response.data
            })
        }catch(error){
            console.log(error.message);
        }
    }
}
export function orderByName(order) {
    return {
      type: ORDER_BY_NAME, 
      payload: order
    };
  }
export const filterByType = (type) => {
    return {
      type: FILTER_BY_TYPE,
      payload: type
    };
  };

export const filterByOrigin = (payload)=>{
    return {
        type: FILTER_BY_ORIGIN,
        payload,
      };
    };
export const filterByAttack = (filter)=>{
        return{
            type: FILTER_BY_ATTACK,
            payload: filter
        }
    } 
export function resetFilters() {
        return {
          type: RESET_FILTERS,
        };
      }