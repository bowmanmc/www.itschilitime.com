import React from 'react';


const ResumeExperience = (props) => {
    const {company, title, start, end, description} = props;

    return (
        <div className="ResumeExperience">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h5>{start} - {end}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ResumeExperience;
