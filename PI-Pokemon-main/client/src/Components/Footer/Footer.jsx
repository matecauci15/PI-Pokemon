import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
// import Footer from '../Footer/Footer';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  // two states first for the current page, set to 1. Second set pokemon per page to 12.
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get(`${URL}`);
        
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };
    fetchPokemons();
    //UseEffect runs when component updates or didmount so
    // Empty array for stopping out the effect. If I want to run when some specific change you can use dependencies
  }, []);

    
    //   const truncer = (string, n) => {
    //         return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    //       };
        
        // Get current pokemons
          const indexOfLastPokemon = currentPage * pokemonsPerPage;
          const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
          const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

        
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPokemonImageURL = (pokemon) => {
            // Construir la URL de la imagen usando el ID del Pokémon.
            // Esta function toma un objeto Pokémon de la lista y extrae su ID de la URL 
            // para construir la URL de la imagen adecuada. Esto debería mostrar las imágenes 
            // de los Pokémon en tu página de inicio.
            const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    };           

    return (
        <div>
        <NavBar />
      <div className="home_general">

        <div className="title_landing">
        </div>
        {
            <div className="home_cards">
            {currentPokemons.map((pokemon) => (
              <div className="article" key={pokemon.id}>
                <Link
                  to={`/${pokemon.name}`}
                  className="detail_links"
                  key={pokemon.id}
                  >
                  <img
                    className="pokemon_image"
                    src={getPokemonImageURL(pokemon)}
                    alt={pokemon.name}
                    />
                  <h2>{pokemon.name}</h2>
                  {pokemon.types && (
          <p>Types: {pokemonType.types.map((type) => type.type.name).join(", ")}</p>
        )}
                </Link>
              </div>
            ))}


            <div className="pagination-container">
              {Array.from({
                  length: Math.ceil(pokemons.length / pokemonsPerPage),
                }).map((_, index) => (
                    <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`pagination-button ${
                        index + 1 === currentPage ? "active" : ""
                    }`}
                    >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        }
        {/* <Footer /> */}
      </div>
        </div>
    );
};

export default HomePage;
