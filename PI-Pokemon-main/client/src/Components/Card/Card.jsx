import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
// import Cards from '../Cards/Cards';
// import "./Card.css"
// import getColorForType from '../../utils/colors';


function Card({pokemon}) {
  const {name, id,image, types} = pokemon
  
  return (

    < >
      <Link className={styles.container} to={`/detail/${id}`}>
      {/* <Link className='container' to={`/detail/${id}`}> */}
          <div className={styles.pokemon_img}>
          {/* <div className='pokemon_img'> */}
              <img src={image} alt={name}  />    
          </div>
        {/* </Link> */}
      <div className={styles.info}>
      <div className={styles.link}>
        <span>{name}</span>
        {/* {types.map(t => <p style={{ backgroundColor: getColorForType(t.name) }}>{t.name}</p>)} */}
        <p> {types.join(' | ')}</p>
        {/* <span>#{id}</span> */}
          </div>
          </div>          
      </Link>  
    </>
  )
}

export default Card