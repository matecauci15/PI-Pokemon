// import React, { useEffect, useState} from 'react'
// import './NavBar.css'
// import { Link  } from 'react-router-dom'

// const Nav = ({handleChange, handleSubmit}) => {
//     const [show, handleShow] = useState(false) 


//     // const transitionNavBar = ()=> {
//     //     if(window.scrollY > 100){
//     //         handleShow(true);
//     //     }else{
//     //         handleShow(false);
//     //     }
//     // };

//     // useEffect(() => {
//     //     window.addEventListener('scroll', transitionNavBar)
//     //     return () => window.removeEventListener('scroll', transitionNavBar)
//     // }, [])

//     // const handleClick = () => {
//     //     window.scrollTo(0, 0) 
//     // }    
    
//     // const onSearch = async (id) => {
//     //     try {
//     //        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);
           
//     //        if(data.name) {
//     //           setCharacters((oldChars) => [...oldChars, data]);
//     //        };
  
//     //     } catch (error) {
//     //        alert('¡No hay personajes con este ID!');
//     //     }
//     //  };

//     return (
//         <div className={`nav ${show && 'nav_black'}`}>
//             {/* <div className="nav_content"> */}
//             <Link to="/homePage/">
//             <img
//             // onClick={handleClick} 
//             className='nav_logo'
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uaj5DOEA_dE7pOGFOtlFWjSx7REGmeKbWA&usqp=CAU" alt="Perrito inicio" />
//             </Link>
//             {/* </div> */}
//                 <div className='nav_links'>
//                         <Link className='nav_link_to' to='/'> Inicio</Link>
//                         <Link className='nav_link_to' to='/form'>Create</Link>
//                 </div> 
//             <div>
//             <form onChange={handleChange} className='search_form'>
//                 <input className='input_search' type="search" placeholder='Search by name or Id' />
//                 <button type="submit" onClick={handleSubmit}>Search</button>

//             </form>
//             </div>
//     </div>
//     );
// }

// export default Nav

import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Nav = ({ handleChange, handleSubmit }) => {
  const [show, handleShow] = useState(false);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <Link to="/homePage/">
        <img
          className='nav_logo'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uaj5DOEA_dE7pOGFOtlFWjSx7REGmeKbWA&usqp=CAU"
          alt="Perrito inicio"
        />
      </Link>
      <div className='nav_links'>
        <Link className='nav_link_to' to='/'> Inicio</Link>
        <Link className='nav_link_to' to='/form'>Create</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='search_form'>
          <input
            className='input_search'
            type="search"
            placeholder='Search by name or Id'
            onChange={handleChange}
          />
          <button className='submit_button' type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
