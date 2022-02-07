import react from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    const menuOptions = {
        about: '<About/>',
        portfolio: '<Portfolio/>',
        contact: '<Contact Me/>'
    }

    return(
        <nav className={styles.nav}>
            <h1><Link to='/'>Alessandro Mota</Link></h1>
            <ul>
                <li><Link to='/'>{menuOptions.about}</Link></li>
                <li><Link to='/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to='/contact'>{menuOptions.contact}</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;