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
        weight: ""
    })
    
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    // const tipos = [normal, fuego, agua, tierra, piedra, veneno, fantasma, volador]
    
    return (
        <div>
            {/* {console.log(state)} */}
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
                <label> Types</label>
                <select onChange={handleChange} name="types" id="">
                {/* {tipos.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}    */}
                </select>
            </div>
        </form>
        <button>Send</button>
    </div> 
  )
}

export default Form