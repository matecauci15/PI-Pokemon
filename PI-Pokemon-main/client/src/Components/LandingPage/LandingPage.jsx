import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () =>  {
    return (
        <div className="landing_general">
            <div className='landingPage'>
                <img src="https://the-pokemon-app.vercel.app/static/media/pokemon.88ce61a9.png" alt="pokemon" />
                <div className="landing_button">
                    <p>¡Explora el Mundo Pokémon:</p>
                    <Link to={'/HomePage'}>
                        <button className='button_landing'></button>
                    </Link>
                </div>
            </div>
            {/* <div className='parragraph'>
                <p>In this project you will be able to learn everything about Pokemons! </p>
                <p>You will even be able to create your own pokemon.</p> 
            </div> */}
            {/* <div id="linkedin-logo" className="logos">
                <a href="https://linkedin.com/in/mateo-caucino/" target='_blank'>
                    <img src="https://w7.pngwing.com/pngs/402/997/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text.png" alt="LinkedIn" />
                </a>
            </div>
            <div id="github-logo" className="logos">
                <a href="https://github.com/matecauci15"  target='_blank'>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png" alt="GitHub" />
                </a>

            </div> */}
        </div>
    )
}

export default LandingPage
// import React from 'react'

// export const LandingPage = () => {
//   return (
//       <div>
//         <div className="landing_general">
//              <div className='landingPage'>
//                  <h1>PI Pokemon</h1>
//                  <div className="landing_button">
//                      <p>Click here to start:</p>
//                      {/* <Link to={'/HomePage'}> */}
//                          <button className='button_landing'></button>
//                      {/* </Link> */}
//                  </div>
//              </div>
//     </div>
//     </div>
//   )
// }
