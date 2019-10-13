import React from 'react';
import { Link } from 'gatsby';

import './largenav.scss';

export default () => {
    return (
        <div className="largenav">
            <Link to="/resume">
                <h2>Resume</h2>
                <p>Check out my professional skills &amp; work history.</p>
            </Link>

            <Link to="/projects">
                <h2>Projects</h2>
                <p>See what I've been spending my free time on lately.</p>
            </Link>

            <Link to="/writing">
                <h2>Writing</h2>
                <p>Brainwave transmissions from me to you.</p>
            </Link>
        </div>
    );
};
