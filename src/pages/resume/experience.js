import React from 'react';

import './experience.scss';

export default (props) => {
    const {company, title, start, end, description} = props;

    return (
        <div className="resume__experience">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h5>{start} - {end}</h5>
            <p>{description}</p>
        </div>
    );
};
