// import React, { useState } from 'react';
import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const Nav = ({ handleChange, handleSubmit }) => {
  // const [show, handleShow] = useState(false);

  return (
    // <div className={`nav ${show && 'nav_black'}`}>
    <div className={styles.nav}>
      <Link to='/homePage'>
        <img
          className={styles.nav_logo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uaj5DOEA_dE7pOGFOtlFWjSx7REGmeKbWA&usqp=CAU"
          alt="Perrito inicio"
        />
      </Link>
      <div className={styles.nav_links}>
        <Link className={styles.nav_link_to} to='/'> <button className={styles.link_button}> Landing </button></Link>
        <Link className={styles.nav_link_to} to='/form'><button className={styles.link_button}> Create </button></Link>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input
            className={styles.input_search}
            type="search"
            placeholder='Search by name'
            onChange={handleChange}
          />
          <button className={styles.search_button} type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
