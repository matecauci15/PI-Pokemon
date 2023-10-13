import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards({allPokemons}) {
  const pokemons = allPokemons

  if (!Array.isArray(allPokemons)) {
    return <span className={styles.span_error}>No se encontraron resultados.</span>;
  }

  return (

    <div className={styles.all_cards}>
        {
        pokemons && pokemons.map((pokemon)=> (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}

    </div>
  )
}

export default Cards