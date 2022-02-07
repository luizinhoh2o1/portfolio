import styles from './SocialLink.module.css';

function SocialLink({ icon, link, textLink }) {
    return(
        <div className={styles.socialLink}>
            {icon}
            <a href={link} target="_blank">{textLink}</a>
        </div>
    );
}

export default SocialLink;