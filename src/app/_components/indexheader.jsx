import Image from "next/image";

import Ohio from "@/components/ohio";

import styles from './indexheader.module.css';


const IndexHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headshot}>
                <Image
                    src="/images/2024-summer-1024.jpg"
                    alt="Michael Bowman"
                    width={512}
                    height={512}
                />
            </div>

            <div className={styles.tagline}>
                <p><span>
                    Hi, I'm
                    <span className={styles.highlight}> Michael Bowman</span>,
                    a
                    <span className={styles.highlight}> software engineer </span>
                    and
                    <span className={styles.highlight}> educator </span>
                    from Dayton, Ohio.
                    <Ohio />
                </span></p>
            </div>
        </header>
    );
};

export default IndexHeader;
