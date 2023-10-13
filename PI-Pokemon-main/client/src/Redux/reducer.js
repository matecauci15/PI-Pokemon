import { GET_POKEMONS, GET_POKEMON_NAME, GET_TYPES, ORDER_BY_NAME, FILTER_BY_ORIGIN, FILTER_BY_TYPE, FILTER_BY_ATTACK } from "./actionsTypes"

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
                const sortedPokemons = state.pokemonsCopy.slice().sort((a, b) => {
                    if (action.payload === 'AA') {
                    return a.name.localeCompare(b.name);
                    } else if (action.payload === 'ZA') {
                    return b.name.localeCompare(a.name);
                    }
                    return 0;
                });
                  
                return {
                    ...state,
                    allPokemons: sortedPokemons,
                };
                    
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
                    const createdFilter = action.payload === "created"
                    ? state.pokemonsCopy.filter((event) => event.createdInDb)
                    : state.pokemonsCopy.filter((event) => !event.createdInDb);
            return {
                ...state,
                allPokemons: action.payload === "All" ? state.pokemonsCopy : createdFilter,
            }
            case FILTER_BY_ATTACK:
                let copy = state.allPokemons;
                if (action.payload === 'descending') {
                    return {
                        ...state, allPokemons: copy.sort((a, b) => b.attack - a.attack).map(poke => poke)
                    }
                } else {
                    return {
                        ...state, allPokemons: copy.sort((a, b) => a.attack - b.attack).map(poke => poke)
                    }
                }
                default:
                    return {...state}
            }
    }
                
export default rootReducer