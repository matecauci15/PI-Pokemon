import axios from 'axios';
import './DetailPage.css'
import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
// import getColorForType from '../../utils/colors';



const Detail = () => {
  const {id} = useParams()

  // global state = component subscribed to global state
  const [pokemon, setPokemon] = useState({})
  // const [pokemon, setPokemon] = useState();
  // const { name } = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3001/pokemons/${id}`)
    .then(({ data }) => {
    setPokemon(data);
      });
  },[id])

    if (!pokemon) {
        return <div className='loading'>
          <img src="https://images.hive.blog/0x0/https://h93805.files.wordpress.com/2017/01/flaming_charizard.gif" 
          alt="" />
          Loading...
        </div>;
    }
    
    // Construir la URL del GIF animado usando el ID del Pokémon
    const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;


  return (
    <div className="details">
      <div className="detail_card" key={pokemon.id}>
        <h3>#{pokemon?.id}</h3>
        <img
            className='detail_img'
            src={gifUrl} 
            alt={pokemon.name}
            />
            <h2>{pokemon?.name}</h2>
        <div className="other_details">
          <p>Hp: {pokemon?.hp}</p>
          <p>Height: {pokemon?.height} cm</p>
          <p>Weight: {pokemon?.weight} kg</p>
          <p>Attack: {pokemon?.attack} </p>
          <p>Defense: {pokemon?.defense}</p>
          <p>Speed: {pokemon?.speed}</p>
          <p>Type: {pokemon.types?.join(' | ')}</p>  
          {/* <p>Types: {pokemon?.types.map((type, index) => (
    <span key={index}>{type.type.name}</span>
  ))}</p> */}

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
