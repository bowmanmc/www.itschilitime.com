import React from 'react';

export default (props) => {
    const { project } = props;

    const bgStyle = {
        'background-image': `url(/images/projects/${project.preview})`
    };

    return (
        <div className="project">

            <div className="project__preview" style={bgStyle}></div>

            <div className="project__info">
                <h2>{project.name}</h2>

                <p>{project.description}</p>

                <ul className="project__links">
                    {project.links.map(link => {
                        return (
                            <li><a href={link.url}>{link.title}</a></li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
};
