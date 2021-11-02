import React, { useState } from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/pizzaLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Navbar = () => {
    const [openNav, setopenNav] = useState(false);

    const openNavHandler = () => {
        setopenNav(!openNav);
    };
    const closeMenu = () => {
        setopenNav(false);
    }
    return (
        <Fragment>
            <div className={classes.navbar}>
                <div className={classes.leftSide}>
                    <Link to="/home"><img src={logo} alt="logo"  onClick={closeMenu}/> </Link>
                </div>
                <div className={classes.rightSide}>
                    {!openNav && <button onClick={openNavHandler}><i className="fas fa-bars fa-2x"></i></button>}
                    <div className={!openNav ? classes.close : classes.open}>
                        <ul>
                            <li><NavLink to="/home" activeClassName={classes.active} onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to="/menu" activeClassName={classes.active} onClick={closeMenu}>Menu</NavLink></li>
                            <li><NavLink to="/about-us" activeClassName={classes.active} onClick={closeMenu}>About Us</NavLink></li>
                            <li><NavLink to="/contact" activeClassName={classes.active} onClick={closeMenu}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Navbar;
