import Link from 'next/link';

import styles from './indexnav.module.css';


const IndexNav = () => {
    return (
        <div className={styles.nav}>
            <Link href="/resume">
                <div className={styles.navItem}>
                    <span className={styles.navTitle}>Resume</span>
                    <span className={styles.navDescription}>Check out my professional skills &amp; work history.</span>
                </div>
            </Link>

            <Link href="/projects">
                <div className={styles.navItem}>
                    <span className={styles.navTitle}>Projects</span>
                    <span className={styles.navDescription}>See what I've been spending my free time on lately.</span>
                </div>
            </Link>

            <Link href="/writing">
                <div className={styles.navItem}>
                    <span className={styles.navTitle}>Writing</span>
                    <span className={styles.navDescription}>Brainwave transmissions from me to you.</span>
                </div>
            </Link>
        </div>
    );
};

export default IndexNav;
