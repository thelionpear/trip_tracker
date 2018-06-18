import React from 'react';
import { NavLink } from 'react-router-dom';
import Trips from './Trips'; 

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/trips">Trips</NavLink>

  </nav>
)

export default NavBar;