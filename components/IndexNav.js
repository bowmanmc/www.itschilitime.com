import React from 'react';
import Link from 'next/link';


const IndexNav = () => {
    return (
        <div className="IndexNav">
            <Link href="/resume">
                <span>
                    <h2>Resume</h2>
                    <p>Check out my professional skills &amp; work history.</p>
                </span>
            </Link>

            <Link href="/projects">
                <span>
                    <h2>Projects</h2>
                    <p>See what I've been spending my free time on lately.</p>
                </span>
            </Link>

            <Link href="/writing">
                <span>
                    <h2>Writing</h2>
                    <p>Brainwave transmissions from me to you.</p>
                </span>
            </Link>
        </div>
    );
};

export default IndexNav;
