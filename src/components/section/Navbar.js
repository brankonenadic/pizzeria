import React from 'react'
import classes from './Navbar.module.css';
import logo from '../../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.leftSide}>
                <Link to="/home"><img src={logo} alt="logo" /> </Link>
            
            </div>
            <div className={classes.rightSide}>

            </div>
        </div>
    )
}

export default Navbar
