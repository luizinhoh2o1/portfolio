import React from 'react';
import styles from './Services.module.css';
import ServiceCard from './ServiceCard';
import { faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faUserGraduate, faHammer } from '@fortawesome/free-solid-svg-icons';

function ServiceSection () {
    return(
        <div className={styles.services}>     
            <div className={styles.serviceDescription}>
                <h2>Explore aqui!</h2>
                <div id="cards-list" className={styles.cards}>
                    <ServiceCard cardTitle="Portifólio" icon={faBriefcase} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Hobbie" icon={faHammer} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Github" icon={faGitSquare} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Cursos" icon={faUserGraduate} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Portifólio 2" icon={faBriefcase} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Hobbie 2" icon={faHammer} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Github 2" icon={faGitSquare} iconSize={'4x'}/>
                    <ServiceCard cardTitle="Cursos 2" icon={faUserGraduate} iconSize={'4x'}/>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;