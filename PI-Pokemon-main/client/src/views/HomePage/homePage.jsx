import NavBar from '../../Components/NavBar/NavBar';
import React, {useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAttack, filterByOrigin, filterByType, getPokemon, getPokemonByName, getTypes, orderByName, resetFilters } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards';
// import getColorForType from '../../utils/colors'
// import Footer from '../Footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector(state => state.allPokemons)
  // const pokemonsCopy = useSelector((state) => state.pokemonsCopy);
  
  const allTypes = useSelector(state => state.allTypes)
  const [filters, setFilters] = useState({
    type: 'All',
    origin: 'All',
    attack: 'All',
  });
  const [searchPokemon, setSearchPokemon] = useState("")
  
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemon())
  },[dispatch])

  useEffect(() => {
    dispatch(filterByType(filters.type));
    dispatch(filterByOrigin(filters.origin));
    dispatch(filterByAttack(filters.attack));
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(orderByName(filters.order));
  }, [dispatch, filters.order]);

  
  function handleClick (event){
    event.preventDefault()
    dispatch(getPokemon())
  }

  function handleChange(event) {
    event.preventDefault()
    setSearchPokemon(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    if (searchPokemon) {
      dispatch(getPokemonByName(searchPokemon));
    } else {
      dispatch(getPokemon());
    }
  }
  function handleClearSearch() {
    setSearchPokemon(""); 
    dispatch(getPokemon(allPokemons)); 
  }

  
  const handleOrderChange = (event) => {
    event.preventDefault();
    const {value} = event.target; 
    dispatch(orderByName(value)); 
  };
  
  
  const handleOriginFilter = (event)=>{
    event.preventDefault()
    const origin = event.target.value;
    dispatch(filterByOrigin(origin))
}
  
  const handleTypeChange = (event) => {
    event.preventDefault()
    const {value} = event.target;
    dispatch(filterByType(value)); 
  };
  
  const handlerFilterAtack = (event) => {
    event.preventDefault()
    const { value } = event.target;
    if (value === "All") {
      dispatch(getPokemon());
    } else {
      dispatch(filterByAttack(value));
    }
  }
  
  const handleClearFilters = () => {
    dispatch(resetFilters())
    dispatch(getPokemon())
  }

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(()=>{
    if(currentPokemons.length === 0) setCurrentPage(1);
  },[currentPokemons])


  const nextHandler = () => {
    if (indexOfFirstPokemon + pokemonsPerPage >= allPokemons.length) {
      return;
    }
    if (indexOfFirstPokemon >= allPokemons.length) return; // validacion para detenerse
    setCurrentPage(currentPage + 1);
  }

  const prevHandler = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <div>
      <NavBar handleChange={handleChange} handleClick={handleClick} handleSubmit={handleSubmit} handleClearSearch={handleClearSearch}/>
      </div>

      <div className={styles.filters}>
      <div>
      <select className={styles.filter_types} onChange={handleOrderChange} name='order'  handleClearFilters={handleClearFilters}>
      <option value="All">Order</option>
        <option value="AA">A-Z</option>
        <option value="ZA">Z-A</option>
      </select>
    </div>
    <div>
      <select className={styles.filter_types} onChange={handleTypeChange} name='types'  handleClearFilters={handleClearFilters} >
        <option  value="All">Types</option>
        {allTypes?.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
      </select>
    </div>
    <div >
          <select className={styles.filter_types} name="origen"  handleClearFilters={handleClearFilters} onChange={(event) => handleOriginFilter(event)}>
              <option value="All">Created</option>
              <option value="created">DB</option>
              <option value="api">API</option>
          </select>
    </div>
    <div>
      <select className={styles.filter_types} name='attack' onChange={handlerFilterAtack} handleClearFilters={handleClearFilters}>
        <option value="All">Attack</option>
        <option value="ascending">Ascending (A-Z)</option>
        <option value="descending">Descending (Z-A)</option>
      </select>
    </div>
      </div>
      <button onClick={handleClearFilters}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/broom.png"
            alt="broom"
          />
        </button>

    <div className={styles.home_cards}> 
        <Cards allPokemons={currentPokemons} />
    </div>
    <div className={styles.pagination_container}>
      <button className={styles.pagination_button} onClick={prevHandler}  disabled={currentPage === 1}>Prev</button>
      <button className={styles.pagination_button} >{currentPage}</button>
      <button className={styles.pagination_button} onClick={nextHandler} disabled={indexOfFirstPokemon + pokemonsPerPage >= allPokemons.length}>Next</button>
    </div>
    </>
  );
};

export default HomePage;