const validateName = (name) => {
    if (name === '') return 'Complete name';
    if (name.length > 30) return 'Name con not be more than 30 characters'
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can not contain special characters';
    return '';
  };
  
  const validateImage = (image) => {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:\d{1,5})?(\/\S*)?$/;
    if (image === '') return 'Complete with an URL';
    if (!urlRegex.test(image)) return 'Invalid URL';
    return '';
  };
  
  const validateNumber = (value, fieldName) => {
    if (value === '') return `Complete with a number for ${fieldName}`;
    if (isNaN(parseInt(value))) return `${fieldName} must be a number`;
    if (value < 1) return `${fieldName} must be greater than 0`;
    // if (!/^[0-9]{1,3}$/.test(value)) return `${fieldName} must be between 0-999`;
    if (!/^(?:[1-9][0-9]{0,2}|[1-9])$/.test(value)) return `${fieldName} must be between 1-999`;
    return '';
  };
  
  const validateTypes = (types) => {
    if (types.length === 0) return 'Select max 2 types';
    if (types.length > 2) return 'Can not select more than 2 types';
    return '';
  };
  
  module.exports = {
    validateName,
    validateImage,
    validateNumber,
    validateTypes,
  };




  
// const validation = (state, name) => {
//     if(name === "name"){
//         if(state.name === '') setErrors({...errors, name:"Complete name"})
//         else if (!/^[a-zA-Z\s]+$/.test(state.name)) setErrors({ ...errors, name: "Name can not contain special characters" })
//         else setErrors({...errors, name: ''})
//     }
//     if(name === "image"){
//         const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:\d{1,5})?(\/\S*)?$/;
//         if (state.image === '') {
//           return setErrors({ ...errors, image: 'Complete with an URL' });
//         }
//         if(!urlRegex.test(state.image)){
//           return setErrors({...errors, image: 'URL inválida'})
//         } else {
//           return setErrors({ ...errors, image: '' });
//         };
//     }
//     if(name === "hp"){
//         if(state.hp === '') setErrors({...errors, hp:'Complete with a number'})
//         else if(isNaN(parseInt(state.hp))) setErrors({...errors, hp: "hp must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.hp)) setErrors({...errors, hp: "Hp must be between 0-999"})
//         else setErrors({...errors, hp: ''})
//     }
//     if(name === "attack"){
//         if(state.attack === '') setErrors({...errors, attack:'Complete with a number'})
//         else if(isNaN(parseInt(state.attack))) setErrors({...errors, attack: "Attack must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.attack)) setErrors({...errors, attack: "Attack must be between 0-999"})
//         else setErrors({...errors, attack: ''})
//     }
//     if(name === "defense"){
//         if(state.defense === '') setErrors({...errors, defense:'Complete with a number'})
//         else if(isNaN(parseInt(state.defense))) setErrors({...errors, defense: "Defense must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.defense)) setErrors({...errors, defense: "Defense must be between 0-999"})
//         else setErrors({...errors, defense: ''})
//     }
//     if(name === "speed"){
//         if(state.speed === '') setErrors({...errors, speed:'Complete with a number'})
//         else if(isNaN(parseInt(state.speed))) setErrors({...errors, speed: "Speed must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.speed)) setErrors({...errors, speed: "Speed must be between 0-999"})
//         else setErrors({...errors, speed: ''})
//     }
//     if(name === "height"){
//         if(state.height === '') setErrors({...errors, height:'Complete with a number'})
//         else if(isNaN(parseInt(state.height))) setErrors({...errors, height: "Height must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.height)) setErrors({...errors, height: "Height must be between 0-999"})
//         else setErrors({...errors, height : ''})
//     }
//     if(name === "weight"){
//         if(state.weight === '') setErrors({...errors, weight:'Complete with a number'})
//         else if(isNaN(parseInt(state.weight))) setErrors({...errors, weight: "Weight must be a number"})
//         else if(!/^[0-9]{1,3}$/.test(state.weight)) setErrors({...errors, weight: "Weight must be between 0-999"})
//         else setErrors({...errors, weight : ''})
//     }
// //     if(name === "types"){
// //         if(state.types === '') setErrors({...errors, types:'Select 1 or 2 types'})
// //         else if(state.types.length > 1) setErrors({...errors, types: "Can not select more than 2 types"})
// //         else setErrors({...errors, types: ''})
// // }
// }
