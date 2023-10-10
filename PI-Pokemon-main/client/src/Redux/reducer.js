import { GET_POKEMONS, GET_POKEMON_NAME, GET_TYPES, ORDER_BY_NAME, FILTER_BY_ORIGIN, FILTER_BY_TYPE } from "./actionsTypes"

const initialState = {
    allPokemons: [],
    pokemonsCopy: [],
    allTypes: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {
                // return copy state so we dont "pisar" the state
                ...state,
                allPokemons: action.payload,
                pokemonsCopy: action.payload
            }
            case GET_TYPES:
                return {
                    ...state,
                    allTypes: action.payload
            }
            case GET_POKEMON_NAME:
                return {
                    // return copy state so we dont "pisar" the state
                    ...state,
                    allPokemons: action.payload,
                    pokemonsCopy: action.payload
                }
                    
            case ORDER_BY_NAME:
            let copy1 = state.allPokemons;
            if (action.payload === 'AA') {
                return {
                    ...state, allPokemons: copy1.sort((a, b) => {
                        if (a.name < b.name) return -1
                        if (a.name > b.name) return 1
                        return 0
                    }).map(p => p)
                }
            } else {
                return {
                    ...state, allPokemons: copy1.sort((a, b) => {
                        if (a.name < b.name) return 1
                        if (a.name > b.name) return -1
                        return 0
                    }).map(p => p)
                }
            }
            case FILTER_BY_TYPE:
                let filterType;
                if (action.payload === "All") {
                    filterType = state.pokemonsCopy;
                } else {
                    filterType = state.pokemonsCopy.filter((event) =>
                    event.types.includes(action.payload)
                    );
                }
                return {
                    ...state,
                    allPokemons: filterType,
                }; 

                case FILTER_BY_ORIGIN:
                    if (action.payload === 'DB') {
                        return { ...state, pokemones: state.pokemonesDB }
                    }
                    if (action.payload === 'API') {
                        return { ...state, pokemones: state.pokemonesAPI }
                    }
                    if (action.payload === 'ALL') {
                        return { ...state, pokemones: state.allPokemones }
                    }
                break
                default:
                    return {...state}
            }
    }
                
export default rootReducer