import React from 'react';
import styles from './ServiceCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard({ cardTitle, icon, iconSize}) {
    return(
        <div className={styles.spacing}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={icon} size={iconSize}/>
                    <h3>{cardTitle}</h3>
                </div>
                <p>Explorar</p>
            </div>
        </div>
    );
}

export default ServiceCard;