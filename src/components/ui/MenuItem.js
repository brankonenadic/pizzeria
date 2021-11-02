
import React from "react";
import classes from './MenuItem.module.css';

const MenuItem = ({ image, name, price }) => {
  return (
    <div className={classes.menuItem}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>Price:  ${price} </p>
    </div>
  );
}

export default MenuItem;