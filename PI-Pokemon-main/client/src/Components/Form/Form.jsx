import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postPokemon } from '../../Redux/actions'

const Form = () => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        tipos: []
    })

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        tipos: []  
    })

    const tipos = [
        "normal", "fuego", "agua", "tierra", "piedra", "veneno", "fantasma", "volador"
    ]
    
    const validation = (state, name) => {
        if(name === "name"){
            if(state.name === '') setErrors({...errors, name:"Name is require"})
            else if(state.name.length >= 30) setErrors({...errors, name:"Name can not be that length"})
            else if (!/^[a-zA-Z\s]+$/.test(state.name)) setErrors({ ...errors, name: "Name cannot contain special characters" })
            else setErrors({...errors, name: ''})

        }
        if(name === "image"){

        }
        if(name === "life"){
            if(isNaN(parseInt(state.life))) setErrors({...errors, life: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.life)) setErrors({...errors, life: "Life must be between 0-999"})
            else setErrors({...errors, life: ''})
        }
        if(name === "attack"){
            if(isNaN(parseInt(state.attack))) setErrors({...errors, attack: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.attack)) setErrors({...errors, attack: "Life must be between 0-999"})
            else setErrors({...errors, attack: ''})
        }
        if(name === "defense"){
            if(isNaN(parseInt(state.defense))) setErrors({...errors, defense: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.defense)) setErrors({...errors, defense: "Life must be between 0-999"})
            else setErrors({...errors, defense: ''})
        }
        if(name === "speed"){
            if(isNaN(parseInt(state.speed))) setErrors({...errors, speed: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.speed)) setErrors({...errors, speed: "Life must be between 0-999"})
            else setErrors({...errors, speed: ''})
        }
        if(name === "height"){
            if(isNaN(parseInt(state.height))) setErrors({...errors, height: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.height)) setErrors({...errors, height: "Life must be between 0-999"})
            else setErrors({...errors, height : ''})
        }
        if(name === "weight"){
            if(isNaN(parseInt(state.weight))) setErrors({...errors, weight: "Life must be a number"})
            else if(!/^[0-9]{1,3}$/.test(state.height)) setErrors({...errors, weight: "Life must be between 0-999"})
            else setErrors({...errors, weight : ''})
        }
    }



    const handleChange = (event) => {
        event.preventDefault()
        
        if(event.target.name === "tipos"){
            if(state.tipos.includes(event.target.value)) return
            setState({
                ...state,
                [event.target.name]: [...state[event.target.name], event.target.value]
            }) 
            return 
        }

        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        validation({
            ...state,
            [event.target.name]: event.target.value, 
        }, event.target.name)
    }
    
    // const disableButton = () => {
    //     for (let error in errors) {
    //       if (errors[error] !== "") return true;
    //     }
    // }
      
    
    const removeTipo = (event) => {
        // const value = document.getElementById(event.target.name).value
        setState({
            ...state,
            [event.target.name]: [...state[event.target.name].filter(x => x!== event.target.id)]
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        dispatch(postPokemon(state))
    }
    

    return (
        <div className='form_general'>
            {console.log(errors)}
            {console.log(state)}
        <form className='pokemon_form' onSubmit={handleSubmit} >
            <input onChange={handleChange} type="text" name='name' placeholder='Name'/>
            <span>{errors.name}</span>
            <input onChange={handleChange} type="text" name='image' placeholder='image'/>
            <input onChange={handleChange} type="number" name='life' placeholder='Life'/>
            <span>{errors.life}</span>
            <input onChange={handleChange} type="number" name='attack' placeholder='Attack'/>
            <span>{errors.attack}</span>
            <input onChange={handleChange} type="number" name='defense' placeholder='Defense'/>
            <span>{errors.defense}</span>
            <input onChange={handleChange} type="number" name='speed' placeholder='Speed'/>
            <span>{errors.speed}</span>
            <input onChange={handleChange} type="number" name='height' placeholder='Height'/>
            <span>{errors.height}</span>
            <input onChange={handleChange} type="number" name='weight' placeholder='Weight'/>
            <span>{errors.weight}</span>
                <div className='type_options'>
                <label>Types: </label>
                <select onChange={handleChange} name="tipos" id="">
                {tipos.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
                </select>
                    {
                        state.tipos.map((tipo, index) => (
                          <div key={index}>
                            <span id={"tipos"}>{tipo}</span>
                            <button id={tipo} type='button' name="tipos" onClick={removeTipo}>X</button>
                          </div>
                        ))
                    }

                <button onClick={handleChange} type='submit'>Submit</button>

            </div>

         <Link className='linktohome' to={'/homePage'}>
            <button id='button' className='button_back'>  Back to home  </button> 
         </Link>
        </form>
    </div> 
  )
}

export default Form