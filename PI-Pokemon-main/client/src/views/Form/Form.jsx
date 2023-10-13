import React, { useEffect } from 'react'
import styles from './Form.module.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { validateName, validateImage, validateNumber, validateTypes } from '../../utils/validation';
// import { useDispatch, useSelector } from 'react-redux'
// import { postPokemon } from '../../Redux/actions'

function Form() {
  // const dispatch = useDispatch();
  
    // State Global types
    const [types, setTypes] = useState([])
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
    types: 'Max two'
  })

const validation = (state, name) => {
  if (name === 'name') {
    setErrors({ ...errors, name: validateName(state.name) });
  }
  if (name === 'image') {
    setErrors({ ...errors, image: validateImage(state.image) });
  }
  if (name === 'hp') {
    setErrors({ ...errors, hp: validateNumber(state.hp, 'Hp') });
  }
  if (name === 'attack') {
    setErrors({ ...errors, attack: validateNumber(state.attack, 'Attack') });
  }
  if (name === 'defense') {
    setErrors({ ...errors, defense: validateNumber(state.defense, 'Defense') });
  }
  if (name === 'speed') {
    setErrors({ ...errors, speed: validateNumber(state.speed, 'Speed') });
  }
  if (name === 'height') {
    setErrors({ ...errors, height: validateNumber(state.height, 'Height') });
  }
  if (name === 'weight') {
    setErrors({ ...errors, weight: validateNumber(state.weight, 'Weight') });
  }
  if (name === "types") {
    setErrors({ ...errors, types: validateTypes(state.types) });
  }
};

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
    // pasamos lo mismo que al estado. Para asegurar estar a la par y no un paso atras
    validation({
      ...state,
      [event.target.name] : event.target.value
    }, event.target.name)
  }

  // Handle Submit
  const handleSubmit = (event)=>{
    event.preventDefault();

    axios.post("http://localhost:3001/pokemons/", state)
    .then(res=>alert(res))
    .catch(error=> error.message)

    // dispatch(postPokemon(state));
    // setState({
    //   name: '',
    //   hp: '',
    //   attack: '',
    //   defense: '',
    //   speed: '',
    //   height: '',
    //   weight: '',
    //   image: '',
    //   types: []
    // });
  }

  // Handle Types
  const handleSelect = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    if (!state.types.includes(selectedValue)) {
      setErrors({...errors, types: ''})
      setState({...state, types: [...state.types, selectedValue]}) 
    } else {
      return
    }
  };

  // Handle Delete Types
      const removeTipo = (event) => {
        setState({
            ...state,
            [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
        })
    }

  return (
    <div className={styles.form_general}>
      <form onSubmit={handleSubmit} className={styles.inputs}>

          <p className={styles.form_title}>Create</p>
        <div className={styles.form_data}>

          <div className={styles.all_divInputs}>
          <input type="text" value={state.name} className={styles.all_inputs} placeholder="Name" name='name' onChange={handleChange} />
          <label className={styles.all_errors} >{errors.name}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="text" className={styles.all_inputs} value={state.image} placeholder="URL imagen" name='image' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.image}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.hp} placeholder="Hp" name='hp' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.hp}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.attack} placeholder="Attack" name='attack' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.attack}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.defense} placeholder="Defense" name='defense' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.defense}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.speed} placeholder="Speed" name='speed' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.speed}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.height} placeholder="Height" name='height' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.height}</label>
          </div>
          <div className={styles.all_divInputs}>
          <input type="number" className={styles.all_inputs} value={state.weight} placeholder="Weight" name='weight' onChange={handleChange}/>
          <label className={styles.all_errors}>{errors.weight}</label>
          </div>
        <div className={styles.type_options}>
                 <label>Types: </label>
                 <select onChange={(event) => handleSelect(event)}  name='types'>
                 {types?.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
                 </select>
                     {
                        state.types.map((tipo, index) => (
                          <div key={index}>
                            <span className={styles.span_type} >{tipo}</span>
                            <button className={styles.button_types} type='button' name='types' id={tipo} onClick={removeTipo}>X</button>
                          </div>
                        ))
                    }
                    <label className={styles.all_errors}>{errors.types}</label>
            </div>
          <div className={styles.button}>
            <button disabled={disableFunction()} className={styles.button_submit} type='submit'>Submit</button>
          </div>
        </div>
          <Link className={styles.linktohome} to={'/homePage'}>
             <button id='button' className={styles.button_back}>Back to home </button> 
          </Link>
      </form>
    </div>
  )
}

export default Form