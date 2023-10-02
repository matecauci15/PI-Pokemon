import axios from 'axios';
import './DetailPage.css'
import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"

const Detail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchSinglePokemonData = async () => {
      try {
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(data);
      } catch (error) {
        return error
      }
    }

    fetchSinglePokemonData();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  // Construir la URL del GIF animado usando el ID del Pokémon
  const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;

  return (
    <div className="details">
      <div className="detail_card" key={pokemon.id}>
        <h3>#{pokemon.id}</h3>
        <h2>{pokemon.name}</h2>
        <img
            className='detail_img'
            src={gifUrl} // Usar la URL del GIF animado
            alt={pokemon.name}
        />
        <div className="other_details">
          <p>Height: {pokemon?.height} cm</p>
          <p>Weight: {pokemon?.weight} kg</p>
          <p>Attack: {pokemon?.attack} </p>
          <p>Speed: {pokemon?.speed}</p>
          <p>Types: {pokemon?.types.type}</p>
          <Link to='/homePage'>
            <button className='button_detail'>
              {'Return'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
