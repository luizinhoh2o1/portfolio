import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    return(
        <form method="post">
            <div className={styles.formInputs}>
                <label>Name: </label><input type="text"/>
                <label>E-mail: </label><input type="email"/>
                <label>Message: </label><textarea rows="5"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm