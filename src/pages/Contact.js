import React from 'react';
import classes from './ContactUs.module.css';
import PizzaLeft from "../assets/pizzaLeft.jpg";

const Contact = () => {
    return (
        <div className={classes.contact}>
            <div
                className={classes.leftSide} style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className={classes.rightSide}>
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact
