import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
// import Cards from '../Cards/Cards';
import "./Card.css"
import getColorForType from '../../utils/colors';


function Card({pokemon}) {
  const {name, id,image, types} = pokemon
  
  return (

    < >
      <Link className='container' to={`/detail/${id}`}>
          <div className='pokemon_img'>
              <img src={image} alt={name}  />    
          </div>
        {/* </Link> */}
      <div className='info'>
      <div className="link">
        <span>{name}</span>
        {/* {types.map(t => <p style={{ backgroundColor: getColorForType(t.name) }}>{t.name}</p>)} */}
        <p className="">{types.join(' | ')}</p>
        <span>#{id}</span>
          </div>
          </div>          
      </Link>  
    </>
  )
}

export default Card