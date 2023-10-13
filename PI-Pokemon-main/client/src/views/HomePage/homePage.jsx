import NavBar from '../../Components/NavBar/NavBar';
import React, {useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAttack, filterByOrigin, filterByType, getPokemon, getPokemonByName, getTypes, orderByName } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards';
// import getColorForType from '../../utils/colors'
// import Footer from '../Footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch()
  // global state = component subscribed to global state
  const allPokemons = useSelector(state => state.allPokemons)
  const pokemonsCopy = useSelector((state) => state.pokemonsCopy); //  copia lista de pokemon ordenada
  console.log(pokemonsCopy);
  const allTypes = useSelector(state => state.allTypes)
  const [searchPokemon, setSearchPokemon] = useState("")


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
    setSearchPokemon(""); // establece el valor de busqueda en una cadena vacia
    dispatch(getPokemon(allPokemons)); // muestra todos los pokemon
  }

  
  useEffect(() => {
    // when page render will send the action and modify the state
    dispatch(getTypes());
    dispatch(getPokemon())
  },[dispatch])
  
  // funcion para manejar el cambio de ORDEN A-Z Z-A
  const handleOrderChange = (event) => {
    event.preventDefault();
    const order = event.target.value; // 'AA' para ascendente, 'ZA' para descendente
    dispatch(orderByName(order)); // llama a la accion para ordenar los pokemons
  };
  
  // Filtrado por ORIGEN 
  // const handleOrigin = (event) =>{
  //   event.preventDefault();
  //   const origin = event.target.event
  //   dispatch(filterByOrigin(origin));
  // };
  
  const handleOriginFilter = (event)=>{
    event.preventDefault()
    const {value} = event.target;
    dispatch(filterByOrigin(value))
}
  
  // Filtrado por TYPE
  const handleTypeChange = (event) => {
    const {value} = event.target;
    dispatch(filterByType(value)); // llama a la accion para filtrar los pokemon por tipo
  };
  
  const handleClearFilters = (event) => {
    if(event.target.value === "All"){
      dispatch(getPokemon())
    }
  }
  
  //Filtrado por Ataque
  const handlerFilterAtack = (event)=> {
    const {value} = event.target;
    dispatch(filterByAttack(value)) 
}
  
  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(()=>{
    if(currentPokemons.length === 0) setCurrentPage(1);
  },[currentPokemons])


  const nextHandler = () => {
    // verificamos si estámos en la última página, para no avanzar mas
    if (indexOfFirstPokemon + pokemonsPerPage >= allPokemons.length) {
      return;
    }
    if (indexOfFirstPokemon >= allPokemons.length) return; // Validación para detenerse
    setCurrentPage(currentPage + 1);
  }

  const prevHandler = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <div>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} handleClearSearch={handleClearSearch}/>
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