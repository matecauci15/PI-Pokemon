// import './LandingPage.css'
import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom'

const LandingPage = () =>  {
    return (
        <div className={styles.landing_general}>
            <div className={styles.landingPage}>
                <img src="https://the-pokemon-app.vercel.app/static/media/pokemon.88ce61a9.png" alt="pokemon" />
                <div className={styles.landing_button}>
                    <p>!Explore the pokemon world:</p>
                    <Link to={'/HomePage'}>
                        <button className={styles.button_landing}></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage

