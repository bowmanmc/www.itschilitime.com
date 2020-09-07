import React from 'react';

import Footer from '../footer';
import Navbar from '../navbar';

import Project from '../components/projects/project';
import Projects from '../components/projects/descriptions';

import '../components/projects/projects.scss';

export default () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <h1>Projects</h1>
                <div className="projects-list">
                {
                    Projects.map(project => {
                        return <Project project={project} />;
                    })
                }
                </div>
            </div>
            <Footer />
        </>
    );
};
