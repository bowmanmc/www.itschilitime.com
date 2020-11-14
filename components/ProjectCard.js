import React from 'react';

const ProjectCard = (props) => {
    const { project } = props;

    const bgStyle = {
        'backgroundImage': `url(/assets/projects/${project.preview})`
    };

    return (
        <div className="ProjectCard">

            <div className="ProjectCard__preview" style={bgStyle}></div>

            <div className="ProjectCard__info">
                <h2>{project.name}</h2>

                <p>{project.description}</p>

                <ul className="ProjectCard__links">
                    {project.links.map(link => {
                        return (
                            <li key={link.url}><a href={link.url}>{link.title}</a></li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
};

export default ProjectCard;
