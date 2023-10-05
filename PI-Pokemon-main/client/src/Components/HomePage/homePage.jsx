import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import getColorForType from '../../utils/colors'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../Redux/actions';
// import Footer from '../Footer/Footer';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

const HomePage = () => {
  const dispatch = useDispatch()
  // const allPokemons = useSelector(state => state.allPokemons)
  
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    dispatch(getPokemon())
  },[dispatch])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get(`${URL}`);
        setPokemons(data.results);

        const detailsPromises = data.results.map(async (pokemon) => {
          const { data: details } = await axios.get(pokemon.url);
          return { [pokemon.name]: details };
        });

        const pokemonDetailsData = await Promise.all(detailsPromises);

        const detailsObject = Object.assign({}, ...pokemonDetailsData);
        setPokemonDetails(detailsObject);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };
    fetchPokemons();
  }, []);

  const getPokemonImageURL = (pokemon) => {
    const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  };


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <div>
      <NavBar />
      <div className="home_general">
        <div className="title_landing"></div>
        <div className="home_cards">
          {currentPokemons.map((pokemon) => (
            <div className="article" key={pokemon.name}>
              <Link to={`/${pokemon.name}`} className="detail_links">
                <img
                  className="pokemon_image"
                  src={getPokemonImageURL(pokemon)}
                  alt={pokemon.name}
                />
                <h2>{pokemon.name}</h2>
                {pokemonDetails[pokemon.name] && (
                  <p>
                    {
                    pokemonDetails[pokemon.name].types.map((type) => (
                    <span className='types' key={type.type.name} style={{ backgroundColor: getColorForType(type.type.name) }}>
                      {type.type.name}
                    </span>
                  ))
                  }
                  </p>
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
      </div>
    </div>
  );
};

export default HomePage;