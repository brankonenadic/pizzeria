import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/pizzaLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Navbar = () => {
    
    return (
        <Fragment>
            <div className={classes.navbar}>
                <div className={classes.leftSide}>
                    <Link to="/home"><img src={logo} alt="logo" /> </Link>
                </div>
                <div className={classes.rightSide}>
                    <ul>
                        <li><NavLink to="/home" activeClassName={classes.active}>Home</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName={classes.active}>About Us</NavLink></li>
                        <li><NavLink to="/contact" activeClassName={classes.active}>Contact Us</NavLink></li>
                        <li><NavLink to="/menu" activeClassName={classes.active}>Menu</NavLink></li>
                    </ul>
                    <button><i className="fas fa-bars fa-2x"></i></button>
                </div>
            </div>
        </Fragment >
    )
}

export default Navbar;
