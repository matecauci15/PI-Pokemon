const getColorForType = (type) => {
    switch (type) {
      case 'grass': return '#9bcc50';
      case 'poison': return '#b97fc9';
      case 'bug': return '#729f3f';
      case 'fire':  return '#fd7d24'
      case 'ground': return '#a74806'
      case 'electric': return '#eed535'
      case'water': return '#4592c4'
      case'flying': return '#8cb3cd'
      case'fairy': return '#ffaec8'
      case'fighting': return '#ff3a79'
      case'rock': return '#a38c21'
      case'steel': return '#9eb7b8'
      case 'psychic': return '#cd6284'
      case 'dark': return '#262525'
      case 'dragon': return '#b00000'
      case 'ice': return '#a8c5c3'
      case 'shadow': return '#656570'
      case 'ghost': return '#7f7f7f'
      case 'normal': return '#a4acaf'
      default: return 'white';
    }
  };
export default getColorForType