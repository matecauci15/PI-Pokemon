import React, { useEffect } from 'react'
import  './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { postPokemon } from '../../Redux/actions'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Form() {
  const dispatch = useDispatch();

  // State Global types
    const [types, setTypes] = useState([])
    console.log(types);
    // const types = useSelector(state=> state.types)

    useEffect(()=>{
        axios.get(`http://localhost:3001/types/`)
        .then(({ data }) => {
        setTypes(data);
          });
      },[])

  // State inputs
  const [state, setState] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    types: []
  })

  // State Errors
  const [errors, setErrors] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    weight: '',
    height: '',
    image: '',
    types: ''
  })

//   Validaciones de inputs
      const validation = (state, name) => {
        if(name === "name"){
            if(state.name === '') setErrors({...errors, name:"Name is require"})
            else if(state.name.length >= 30) setErrors({...errors, name:"Name can not be that length"})
            else if (!/^[a-zA-Z\s]+$/.test(state.name)) setErrors({ ...errors, name: "Name cannot contain special characters" })
            else setErrors({...errors, name: ''})

        }
        if(name === "image"){
            const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:\d{1,5})?(\/\S*)?$/;
            if (state.image === '') {
              return setErrors({ ...errors, image: 'The image URL is required' });
            }
            if(!urlRegex.test(state.image)){
              return setErrors({...errors, image: 'URL inválida'})
            } else {
              return setErrors({ ...errors, image: '' });
            };

        }
        if(name === "hp"){
            if(isNaN(parseInt(state.hp))) setErrors({...errors, hp: "hp must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.hp)) setErrors({...errors, hp: "Life must be between 0-999"})
            else setErrors({...errors, hp: ''})
        }
        if(name === "attack"){
            if(isNaN(parseInt(state.attack))) setErrors({...errors, attack: "Attack must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.attack)) setErrors({...errors, attack: "Attack must be between 0-999"})
            else setErrors({...errors, attack: ''})
        }
        if(name === "defense"){
            if(isNaN(parseInt(state.defense))) setErrors({...errors, defense: "Defense must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.defense)) setErrors({...errors, defense: "Defense must be between 0-999"})
            else setErrors({...errors, defense: ''})
        }
        if(name === "speed"){
            if(isNaN(parseInt(state.speed))) setErrors({...errors, speed: "Speed must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.speed)) setErrors({...errors, speed: "Speed must be between 0-999"})
            else setErrors({...errors, speed: ''})
        }
        if(name === "height"){
            if(isNaN(parseInt(state.height))) setErrors({...errors, height: "Height must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.height)) setErrors({...errors, height: "Height must be between 0-999"})
            else setErrors({...errors, height : ''})
        }
        if(name === "weight"){
            if(isNaN(parseInt(state.weight))) setErrors({...errors, weight: "Weight must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.weight)) setErrors({...errors, weight: "Weight must be between 0-999"})
            else setErrors({...errors, weight : ''})
        }
    }

  // Disabled Button
  const disableFunction = ()=>{
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  // Handle Inputs
  const handleChange = (event)=>{
    setState({
      ...state,
      [event.target.name] : event.target.value
    });

    validation({
      ...state,
      [event.target.name] : event.target.value
    }, event.target.name)
  }

  // Handle Post
  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(postPokemon(state));
    setState({
      name: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      image: '',
      types: []
    });
  }

  // Handle Types
  const handleSelect = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;

    if (!state.types.includes(selectedValue)) {
      setErrors({...errors, types: ''})
      // Agrega el valor seleccionado al arreglo
      setState({...state, types: [...state.types, selectedValue]})
    } else {
      // Muestra un mensaje de error o realiza alguna acción
      alert("Este tipo ya ha sido seleccionado.");
    }
  };

  // Handle Delete Types
//   const handleDelete = (event) => {
//     setState({
//       ...state, // estado anterior
//       types: state.types.filter((tipo) => tipo !== event), // Elimina el tipo seleccionado
//     });
//   };


      const removeTipo = (event) => {
        // const value = document.getElementById(event.target.name).value
        setState({
            ...state,
            [event.target.name]: [...state[event.target.name].filter(x => x!== event.target.id)]
        })
    }

  return (
    <div className="form_general">
      <form onSubmit={handleSubmit} className="inputs">

        <div className="form_data">
          <p className="form_title">Create</p>

          <div className="all_divInputs">
          <input type="text" className="all_inputs" placeholder="Name" name='name' onChange={handleChange} />
          <label className="all_errors ">{errors.name}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="text" placeholder="URL imagen" value={state.image}  name='image' onChange={handleChange}/>
          <label className="all_errors">{errors.image}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Hp" name='hp' onChange={handleChange}/>
          <label className="all_errors">{errors.hp}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Attack" name='attack' onChange={handleChange}/>
          <label className="all_errors">{errors.attack}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Defense" name='defense' onChange={handleChange}/>
          <label className="all_errors">{errors.defense}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Speed" name='speed' onChange={handleChange}/>
          <label className="all_errors">{errors.speed}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Height" name='height' onChange={handleChange}/>
          <label className="all_errors">{errors.height}</label>
          </div>
          <div className="all_divInputs">
          <input className="all_inputs" type="number" placeholder="Weight" name='weight' onChange={handleChange}/>
          <label className="all_errors">{errors.weight}</label>
          </div>

        <div className='type_options'>
                 <label>Types: </label>
                 <select onChange={(event) => handleSelect(event)} name='types'>
                 {types?.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
                 </select>
                     {
                        state.types.map((tipo, index) => (
                          <div key={index}>
                            <span >{tipo}</span>
                            <button type='button' name='types' onClick={removeTipo}>X</button>
                          </div>
                        ))
                    }
                    <label className="all_errors">{errors.types}</label>
                {/* <img className="pokemon" src={state.image} alt="" /> */}
            </div>

          <div className='button'>
            <button disabled={disableFunction()} className='button_submit' type='submit'>Submit</button>
          </div>
        </div>
      <Link className='linktohome' to={'/homePage'}>
             <button id='button' className='button_back'>Back to home  </button> 
          </Link>
      </form>
    </div>
  )
}

export default Form