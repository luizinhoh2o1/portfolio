import react from 'react';
import SocialLink from '../components/social/SocialLink';
import styles from './Contact.module.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../components/form/ContactForm';

function Contact() {
    return(
        <div className={styles.contact}>
            <div className={styles.title}>
                <h2>Get in touch</h2>
            </div>
            <div className={styles.areas}>
                <ContactForm />
                <div className={styles.network}>
                    <SocialLink
                        icon={<FontAwesomeIcon icon={faGithub} size="2x"/>}
                        link="https://github.com/luizinhoh2o1"
                        textLink="Github"
                    />
                    <SocialLink
                        icon={<FontAwesomeIcon icon={faLinkedin} size="2x"/>}
                        link="https://linkedin.com/in/alessandro-luiz-259124199"
                        textLink="LinkedIn"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;