import React from 'react';

export default (props) => {
    const { project } = props;

    return (
        <div className="project">
            { project.name }
        </div>
    );
};
