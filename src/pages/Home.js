import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/pizza.jpeg';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home} style={{backgroundImage: `url(${backgroundImg})`}}>
             
            <div className={classes.headerContainer}>
                <h1>Giovanni Pizzeria</h1>
                <p>Pizza with Italian taste</p>
                <Link to="/menu"><button>Order Now</button></Link>
            </div>
        </div>
    )
}

export default Home
