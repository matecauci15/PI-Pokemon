import React, { useState } from 'react'

const Form = () => {
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
        name: "Name is require",
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

        }
        if(name === "image"){

        }
        if(name === "life"){

        }
        if(name === "attack"){

        }
        if(name === "defense"){

        }
        if(name === "speed"){

        }
        if(name === "height"){

        }
        if(name === "weight"){
             
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
    }
    
    
    const removeTipo = (event) => {
        // const value = document.getElementById(event.target.name).value
        setState({
            ...state,
            [event.target.name]: [...state[event.target.name].filter(x => x!== event.target.id)]
        })
    }
    return (
        <div>
            {console.log(state)}
        <form>
            <input onChange={handleChange} type="text" name='name' placeholder='Name'/>
            <input onChange={handleChange} type="text" name='image' placeholder='image'/>
            <input onChange={handleChange} type="number" name='life' placeholder='Life'/>
            <input onChange={handleChange} type="number" name='attack' placeholder='Attack'/>
            <input onChange={handleChange} type="number" name='defense' placeholder='Defense'/>
            <input onChange={handleChange} type="number" name='speed' placeholder='Speed'/>
            <input onChange={handleChange} type="number" name='height' placeholder='Height'/>
            <input onChange={handleChange} type="number" name='weight' placeholder='Weight'/>
            <div>
                <label>Types: </label>
                <select onChange={handleChange} name="tipos" id="">
                {tipos.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}   
                </select>
                {
                    state.tipos.map(tipo => <div><span id={"tipos"}>{tipo}</span><button id={tipo} type='button' name="tipos" onClick={removeTipo}>X</button> </div>)
                }
        <button onClick={handleChange} type='button'>Send</button>
            </div>
        </form>
    </div> 
  )
}

export default Form