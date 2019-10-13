import React from 'react';

import './largenav.scss';

export default () => {
    return (
        <div className="largenav">
            <a href="/resume">
                <h2>Resume</h2>
                <p>Check out my professional skills &amp; work history.</p>
            </a>

            <a href="/projects">
                <h2>Projects</h2>
                <p>See what I've been spending my free time on lately.</p>
            </a>

            <a href="/writing">
                <h2>Writing</h2>
                <p>Brainwave transmissions from me to you.</p>
            </a>
        </div>
    );
};
