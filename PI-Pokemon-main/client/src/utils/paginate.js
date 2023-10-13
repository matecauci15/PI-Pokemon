// import React from 'react'

// export const Paginate = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pokemonsPerPage] = useState(12);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//       };
    
//       const indexOfLastPokemon = currentPage * pokemonsPerPage;
//       const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//       const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    
//       useEffect(()=>{
//         if(currentPokemons.length === 0) setCurrentPage(1);
//       },[currentPokemons])
    
    
//       const nextHandler = () => {
//         // verificamos si estámos en la última página, para no avanzar mas
//         if (indexOfFirstPokemon + pokemonsPerPage >= allPokemons.length) {
//           return;
//         }
//         if (indexOfFirstPokemon >= allPokemons.length) return; // Validación para detenerse
//         setCurrentPage(currentPage + 1);
//       }
    
//       const prevHandler = () => {
//         if (currentPage === 0) return;
//         setCurrentPage(currentPage - 1);
//       }
//   return (
//     <div className={styles.pagination_container}>
//     <button className={styles.pagination_button} onClick={prevHandler}  disabled={currentPage === 1}>Prev</button>
//     <button className={styles.pagination_button} >{currentPage}</button>
//     <button className={styles.pagination_button} onClick={nextHandler} disabled={indexOfFirstPokemon + pokemonsPerPage >= allPokemons.length}>Next</button>
//   </div>
//   )
// }
