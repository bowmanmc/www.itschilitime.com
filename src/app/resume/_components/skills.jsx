import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div className={styles.skills}>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Engineering Management</li>
                    <li>Team Leadership</li>
                    <li>Coaching &amp; Mentorship</li>
                    <li>Software Architecture</li>
                    <li>Agile Software Development</li>
                    <li>Data Visualization</li>
                    <li>Web Application Development</li>
                </ul>
            </section>
            <section>
                <h2>Tools</h2>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>D3.js</li>
                    <li>SVG</li>
                    <li>Node.js</li>
                    <li>Docker</li>
                    <li>AWS</li>
                </ul>
            </section>
            <section>
                <h2>Languages</h2>
                <ul>
                    <li>JavaScript/TypeScript</li>
                    <li>SASS/CSS</li>
                    <li>HTML</li>
                    <li>Python</li>
                    <li>C++</li>

                </ul>
            </section>
        </div>
    );
}
