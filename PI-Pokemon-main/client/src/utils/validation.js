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
        else if(/^[0-9]{1,3}$/) setErrors({...errors, life: "Life must be between 0-999"})
        else setErrors({...errors, life: ''})
    }
    if(name === "attack"){
        if(isNaN(parseInt(state.life))) setErrors({...errors, life: "attack must be a number"})
        else setErrors({...errors, life: ''})
    }
    if(name === "defense"){
        if(isNaN(parseInt(state.life))) setErrors({...errors, life: "defense must be a number"})
        else setErrors({...errors, life: ''})
    }
    if(name === "speed"){
        if(isNaN(parseInt(state.life))) setErrors({...errors, life: "speed must be a number"})
        else setErrors({...errors, life: ''})
    }
    if(name === "height"){
        if(isNaN(parseInt(state.life))) setErrors({...errors, life: "height must be a number"})
        else setErrors({...errors, life: ''})
    }
    if(name === "weight"){
        if(isNaN(parseInt(state.life))) setErrors({...errors, life: "Lwightife must be a number"})
        else setErrors({...errors, life: ''})
    }
}