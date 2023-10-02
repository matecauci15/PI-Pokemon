import React, { useEffect, useState} from 'react'
import './NavBar.css'
import { Link  } from 'react-router-dom'
// import { FaSearch } from 'react-icons/fa'

const Nav = () => {
    const [show, handleShow] = useState(false) 
    // const [breeds, setBreeds] = useState(initialBreeds)


    const transitionNavBar = ()=> {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    const handleClick = () => {
        window.scrollTo(0, 0) 
    }    
    
    // const onSearch = async (id) => {
    //     try {
    //        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);
           
    //        if(data.name) {
    //           setCharacters((oldChars) => [...oldChars, data]);
    //        };
  
    //     } catch (error) {
    //        alert('¡No hay personajes con este ID!');
    //     }
    //  };

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            {/* <div className="nav_content"> */}
            <img
            onClick={handleClick} 
            className='nav_logo'
            src="https://img.lovepik.com/element/45007/8040.png_860.png" alt="Perrito inicio" />
            {/* </div> */}
                <div className='nav_links'>
                        <Link className='nav_link_to' to='/'> Inicio</Link>
                        <Link className='nav_link_to' to='/createDog'>Create Dog</Link>
                        <Link className='nav_link_to' to='/form'>Create</Link>
                </div> 
            <div>
            {/* <form className='search_form'> */}
                {/* <FaSearch/> */}
                <input className='input_search' type="text" name="search" placeholder='Search by breer or ID' />
                <input type="submit" />
                {/* <select className="inputs_select">
                    {breeds.map(breed => (
                        <>
                        <option value={breed.id} key={breed.id}>{breed.name}</option>
                        </>
                        ))}
                    </select> */}
            {/* </form> */}
            </div>
    </div>
    );
}

export default Nav
