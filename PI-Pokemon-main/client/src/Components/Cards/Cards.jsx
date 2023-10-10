import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

function Cards({allPokemons}) {

  const pokemons = allPokemons

  return (

    <div className="all_cards">
        {
        pokemons && pokemons.map((pokemon)=> (
          <Card pokemon={pokemon} />
        ))}

    </div>
  )
}

export default Cards