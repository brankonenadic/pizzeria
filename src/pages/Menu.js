import React from 'react';
import { MenuList } from '../assets/MenuList';
import MenuItem from '../components/ui/MenuItem';
import classes from './Menu.module.css';

const Menu = () => {

    return (
        <div className={classes.menu}>
            <h1 className={classes.menuTitle}>Our Menu</h1>
            <div className={classes.menuList}>
                {MenuList.map(item => (<MenuItem key={item.id} image={item.image} name={item.name} price={item.price} />))}
            </div>
        </div>
    )
}

export default Menu
