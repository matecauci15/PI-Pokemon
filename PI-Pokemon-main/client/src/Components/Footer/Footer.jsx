// import NavBar from '../NavBar/NavBar'
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css';
// // import Footer from '../Footer/Footer';

// const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

// const HomePage = () => {
//   const [pokemons, setPokemons] = useState([]);
//   // two states first for the current page, set to 1. Second set pokemon per page to 12.
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pokemonsPerPage] = useState(12);
//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const { data } = await axios.get(`${URL}`);
        
//         setPokemons(data.results);
//       } catch (error) {
//         console.error("Error fetching pokemons:", error);
//       }
//     };
//     fetchPokemons();
//     //UseEffect runs when component updates or didmount so
//     // Empty array for stopping out the effect. If I want to run when some specific change you can use dependencies
//   }, []);

    
//     //   const truncer = (string, n) => {
//     //         return string?.length > n ? string.substr(0, n - 1) + '...' : string;
//     //       };
        
//         // Get current pokemons
//           const indexOfLastPokemon = currentPage * pokemonsPerPage;
//           const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//           const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

        
//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const getPokemonImageURL = (pokemon) => {
//             // Construir la URL de la imagen usando el ID del Pokémon.
//             // Esta function toma un objeto Pokémon de la lista y extrae su ID de la URL 
//             // para construir la URL de la imagen adecuada. Esto debería mostrar las imágenes 
//             // de los Pokémon en tu página de inicio.
//             const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
//             return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//     };           

//     return (
//         <div>
//         <NavBar />
//       <div className="home_general">

//         <div className="title_landing">
//         </div>
//         {
//             <div className="home_cards">
//             {currentPokemons.map((pokemon) => (
//               <div className="article" key={pokemon.id}>
//                 <Link
//                   to={`/${pokemon.name}`}
//                   className="detail_links"
//                   key={pokemon.id}
//                   >
//                   <img
//                     className="pokemon_image"
//                     src={getPokemonImageURL(pokemon)}
//                     alt={pokemon.name}
//                     />
//                   <h2>{pokemon.name}</h2>
//                   {pokemon.types && (
//           <p>Types: {pokemonType.types.map((type) => type.type.name).join(", ")}</p>
//         )}
//                 </Link>
//               </div>
//             ))}


//             <div className="pagination-container">
//               {Array.from({
//                   length: Math.ceil(pokemons.length / pokemonsPerPage),
//                 }).map((_, index) => (
//                     <button
//                     key={index}
//                     onClick={() => paginate(index + 1)}
//                     className={`pagination-button ${
//                         index + 1 === currentPage ? "active" : ""
//                     }`}
//                     >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         }
//         {/* <Footer /> */}
//       </div>
//         </div>
//     );
// };

// export default HomePage;
// import NavBar from '../NavBar/NavBar';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './HomePage.css';
// import getColorForType from '../../utils/colors'
// import { useDispatch, useSelector } from 'react-redux';
// import { getPokemon } from '../../Redux/actions';
// // import Footer from '../Footer/Footer';

// const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

// const HomePage = () => {
//   const dispatch = useDispatch()
//   const allPokemons = useSelector(state => state.allPokemons)
//   console.log(allPokemons);
  
//   const [pokemons, setPokemons] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pokemonsPerPage] = useState(12);
//   const [pokemonDetails, setPokemonDetails] = useState({});

//   useEffect(() => {
//     dispatch(getPokemon())
//   },[dispatch])

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const { data } = await axios.get(`${URL}`);
//         setPokemons(data.results);

//         const detailsPromises = data.results.map(async (pokemon) => {
//           const { data: details } = await axios.get(pokemon.url);
//           return { [pokemon.name]: details };
//         });

//         const pokemonDetailsData = await Promise.all(detailsPromises);

//         const detailsObject = Object.assign({}, ...pokemonDetailsData);
//         setPokemonDetails(detailsObject);
//       } catch (error) {
//         console.error("Error fetching pokemons:", error);
//       }
//     };
//     fetchPokemons();
//   }, []);

//   const getPokemonImageURL = (pokemon) => {
//     const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
//     return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//   };


//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastPokemon = currentPage * pokemonsPerPage;
//   const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//   const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

//   return (
//     <div>
//       <NavBar />
//       <div className="home_general">
//         <div className="title_landing"></div>
//         <div className="home_cards">
//           {currentPokemons.map((pokemon) => (
//             <div className="article" key={pokemon.name}>
//               <Link to={`/${pokemon.name}`} className="detail_links">
//                 <img
//                   className="pokemon_image"
//                   src={getPokemonImageURL(pokemon)}
//                   alt={pokemon.name}
//                 />
//                 <h2>{pokemon.name}</h2>
//                 {pokemonDetails[pokemon.name] && (
//                   <p>
//                     {
//                     pokemonDetails[pokemon.name].types.map((type) => (
//                     <span className='types' key={type.type.name} style={{ backgroundColor: getColorForType(type.type.name) }}>
//                       {type.type.name}
//                     </span>
//                   ))
//                   }
//                   </p>
//                 )}
//               </Link>
//             </div>
//           ))}
//           <div className="pagination-container">
//             {Array.from({
//               length: Math.ceil(pokemons.length / pokemonsPerPage),
//             }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => paginate(index + 1)}
//                 className={`pagination-button ${
//                   index + 1 === currentPage ? "active" : ""
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import NavBar from '../NavBar/NavBar';
import React, { useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import getColorForType from '../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../Redux/actions';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const getPokemonImageURL = (pokemonId) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  };

  return (
    <div>
      <NavBar />
      <div className="home_general">
        <div className="title_landing"></div>
        <div className="home_cards">
          {allPokemons.map((pokemon) => (
            <div className="article" key={pokemon.id}>
              <img
                className="pokemon_image"
                src={getPokemonImageURL(pokemon.id)}
                alt={pokemon.name}
              />
              <h2>{pokemon.name}</h2>
              <p>
                {pokemon.types.map((type) => (
                  <span
                    className="types"
                    key={type}
                    style={{ backgroundColor: getColorForType(type) }}
                  >
                    {type}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// !|||||||||||||||||||||||||||||| tratando de traer datos de la bd
// import NavBar from '../NavBar/NavBar';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import './HomePage.css';
// import getColorForType from '../../utils/colors'
// import { useDispatch, useSelector } from 'react-redux';
// import { getPokemon, getTypes } from '../../Redux/actions';
// import axios from 'axios';
// // import Footer from '../Footer/Footer';

// // const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

// const HomePage = () => {
//   const dispatch = useDispatch()
//   const allPokemons = useSelector((state) => state.allPokemons)
//   const allTypes = useSelector((state) => state.allTypes)

//   useEffect(() => {
//   const fetchPokemonDetails = async (url) => {
//     try {
//       const response = await axios.get(url);
//       return response.data; // Los datos del Pokémon
//     } catch (error) {
//       console.error(`Error al obtener detalles del Pokémon: ${error.message}`);
//     }
//   };
//   const fetchAllPokemonDetails = async () => {
//     const pokemonDetailsPromises = allPokemons
//       .filter((pokemon) => pokemon.url)
//       .map((pokemon) => fetchPokemonDetails(pokemon.url));
//     const pokemonDetails = await Promise.all(pokemonDetailsPromises);
//     setPokemonDetails(pokemonDetails)
//     // console.log(pokemonDetails);
//   };
//   fetchAllPokemonDetails();
// }, [allPokemons]);

//   // const [pokemons, setPokemons] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pokemonsPerPage] = useState(12);
//   const [pokemonDetails, setPokemonDetails] = useState({});
  
  
//   const indexOfLastPokemon = currentPage * pokemonsPerPage;
//   const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//   const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

//   useEffect(()=>{
//     if(currentPokemons.length === 0) setCurrentPage(1);
//   },[currentPokemons])

//   const nextHandler = () => {
//     if (indexOfFirstPokemon >= allPokemons.length) return; // Validación para detenerse
//     setCurrentPage(currentPage + 1);
//   }

//   const prevHandler = () => {
//     if (currentPage === 0) return;
//     setCurrentPage(currentPage - 1);
//   }


//   useEffect(()=>{
//     dispatch(getPokemon())
//     dispatch(getTypes())
//   }, [dispatch])
  
  
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     dispatch(getPokemon())
//   },[dispatch])

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const detailsPromises = allTypes.map(async (pokemon) => {
//           const { data: details } = await pokemon.url;
//           return { [pokemon.name]: details };
//         });
//         const pokemonDetailsData = await Promise.all(detailsPromises);

//         const detailsObject = Object.assign({}, ...pokemonDetailsData);
//         setPokemonDetails(detailsObject)
//       } catch (error) {
//         console.error("Error fetching pokemons:", error);
//       }
//     };
//     fetchPokemons();
//   }, [allTypes]);

//   // const getPokemonImageURL = (currentPokemons) => {
//   //   const pokemonId = currentPokemons.url.split('/').filter(Boolean).pop();
//   //   return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
//   // };

  
//   return (
//     <div>
//       <NavBar />
//       <div className="home_general">
//         <div className="title_landing"></div>
//         <div className="home_cards">
//           {currentPokemons.map((pokemon) => (
//             <div className="article" key={pokemon.name}>
//               <Link to={`/${pokemon.name}`} className="detail_links">
//                 <img
//                   className="pokemon_image"
//                   // src={getPokemonImageURL? getPokemonImageURL(pokemon) : allPokemons.url }
//                   src={pokemon.image }
//                   alt={pokemon.name}
//                 />
//                 <h2>{pokemon.name}</h2>
//                 {pokemonDetails[pokemon.name] && (
//                   <p>
//                     {
//                     pokemonDetails[pokemon.name].types.map((type) => (
//                     <span className='types' key={type.type.name} style={{ backgroundColor: getColorForType(type.type.name) }}>
//                       {type.type.name}
//                     </span>
//                   ))
//                   }
//                   </p>
//                 )}
//               </Link>
//             </div>
//           ))}
//           <div className="pagination-container">
//             {Array.from({
//               length: Math.ceil(allPokemons.length / pokemonsPerPage),
//             }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => paginate(index + 1)}
//                 className={`pagination-button ${
//                   index + 1 === currentPage ? "active" : ""
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//       <button onClick={prevHandler}>Prev</button>
//       <button >{currentPage}</button>
//       <button onClick={nextHandler}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
