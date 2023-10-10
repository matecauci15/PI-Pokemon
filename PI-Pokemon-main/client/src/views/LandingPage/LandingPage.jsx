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
        </div>
    )
}

export default LandingPage

