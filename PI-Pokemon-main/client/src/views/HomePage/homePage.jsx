import NavBar from '../../Components/NavBar/NavBar';
import React, {useEffect, useState } from 'react';
import './HomePage.css';
// import getColorForType from '../../utils/colors'
import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin, filterByType, getPokemon, getPokemonByName, getTypes, orderByName } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards';
// import Footer from '../Footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch()
  // const pokemons = useSelector((state) => state.pokemonsCopy); //  copia lista de Pokémon ordenada
  // global state = component subscribed to global state
  const allPokemons = useSelector(state => state.allPokemons)
  const allTypes = useSelector(state => state.allTypes)

  const [searchPokemon, setSearchPokemon] = useState("")
  // const [searchId, setSearchId] = useState("");
  // const [selectedOrigin, setSelectedOrigin] = useState("all");


  function handleChange(event) {
    event.preventDefault()
    setSearchPokemon(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    dispatch(getPokemonByName(searchPokemon))
  }

  

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);


  useEffect(() => {
    // when page render will send the action and modify the state
    dispatch(getTypes());
    dispatch(getPokemon())
  },[dispatch])

  // Función para manejar el cambio de orden
  const handleOrderChange = (event) => {
    const order = event.target.value; // 'AA' para ascendente, 'ZA' para descendente
    dispatch(orderByName(order)); // Llama a la acción para ordenar los Pokémons
  };

  // filtrado por origen 
  const handleOrigin = (event)=>{
    const {value} = event.target;
    dispatch(filterByOrigin(value))
}

// Paginado
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
    if (indexOfFirstPokemon >= allPokemons.length) return; // Validación para detenerse
    setCurrentPage(currentPage + 1);
  }

  const prevHandler = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  }

  // Filter by TYPE
  const [selectedType, setSelectedType] = useState(""); // Estado para almacenar el tipo seleccionado

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type); // Actualiza el tipo seleccionado en el estado local
    dispatch(filterByType(type)); // Llama a la acción para filtrar los Pokémon por tipo
  };


  return (
    <div className='home_general'>
      <div>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>

      <div className='filters'>
      <div className='filter_az'>
      <select onChange={handleOrderChange}>
        <option value="AA">Ascendente (A-Z)</option>
        <option value="ZA">Descendente (Z-A)</option>
      </select>
    </div>
    <div className='filter_types'>
      <select onChange={handleTypeChange} value={selectedType}>
        <option value="">Todos</option>
        {allTypes?.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
      </select>
    </div>
    <div className='filter_types'>
    <select name="origen" onChange={handleOrigin}>
                <option value="ALL">-Pokemones-</option>
                <option value="DB">Mis pokemones</option>
                <option value="API">Pokemones de la App</option>
                <option value="ALL">Todos los pokemones</option>
            </select>
    </div>
      </div>

    <div className='home_cards'> 
        <Cards allPokemons={currentPokemons} />
    </div>
    <div className='pagination-container'>
      <button className="" onClick={prevHandler}>Prev</button>
      <button className="" >{currentPage}</button>
      <button className="" onClick={nextHandler}>Next</button>
    </div>
    </div>
  );
};

export default HomePage;