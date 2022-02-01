import React from 'react';
import myPicture from '../../img/myPicture.jpg';
import styles from './About.module.css';

function AboutSection() {
    return (
        <div className={styles.about}>
            <div className={styles.description}>
                <h2>Alessandro Mota</h2>
                <h2>Desenvolvedor Entusiasta</h2>
                <p>
                    Sou um jovem que ama tecnologia desde pequeno, atualmente
                    estudo desenvolvimento usando React, Node.js e MongoDB.
                    Tive contato com meu primeiro código aos 13 anos,
                    criando uma janela em Visual Basic.
                    Aos 15 anos comecei a aprender logica em C/C++, tempos depois
                    parei meus estudos e retornei ao entrar na faculdade de
                    Análise e Desenvolvimento de Sistemas.
                </p>
                <button>Contact Me</button>
            </div>
            <img
                src={myPicture}
                className={styles.myPicture}
                alt="myPicture"
            />
        </div>
    );
}

export default AboutSection;