import axios from 'axios';
import styles from './DetailPage.module.css'
import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Nav from '../../Components/NavBar/NavBar';
// import getColorForType from '../../utils/colors';


const Detail = () => {
  const {id} = useParams()
  
  // global state = component subscribed to global state
  const [pokemon, setPokemon] = useState()
  
  // const [pokemon, setPokemon] = useState();
  // const { name } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  useEffect(()=>{
    axios.get(`http://localhost:3001/pokemons/${id}`)
    .then(({ data }) => {
    setPokemon(data);
      });
  },[id])

    if (!pokemon) {
        return <div className={styles.loading}>
          <img src="https://images.hive.blog/0x0/https://h93805.files.wordpress.com/2017/01/flaming_charizard.gif" 
          alt="" />
          Loading...
        </div>;
    }
    
    // Construir la URL del GIF animado usando el ID del Pokémon
    const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;


  return (
    <>
    <Nav className={styles.nav_detail}/>
    <div className={styles.details}>
      
      <div className={styles.detail_card} key={pokemon.id}>
        <h3>#{pokemon?.id}</h3>
        <img
            className={styles.detail_img}
            src={gifUrl? gifUrl : pokemon.image} 
            alt={pokemon.name}
            />
        <div className={styles.other_details}>
          <h2 className={styles.detail_titlte}>{capitalizeFirstLetter(pokemon?.name)}</h2>
          <p className={styles.detail_data}>Hp | {pokemon?.hp}</p>
          <p className={styles.detail_data}>Height | {pokemon?.height}cm</p>
          <p className={styles.detail_data}>Weight | {pokemon?.weight}kg</p>
          <p className={styles.detail_data}>Attack | {pokemon?.attack}</p>
          <p className={styles.detail_data}>Defense | {pokemon?.defense}</p>
          <p className={styles.detail_data}>Speed | {pokemon?.speed} </p>
          <p className={styles.detail_data}>Type: {pokemon.types?.join(' | ')}  </p>  

          <Link className={styles.link_to} to='/homePage'>
            <button className={styles.button_detail}>Return</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}

export default Detail;
