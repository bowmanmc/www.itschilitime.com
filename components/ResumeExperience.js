import React from 'react';


const ResumeExperience = (props) => {
    const {company, title, start, end, children} = props;

    return (
        <div className="ResumeExperience">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h5>{start} - {end}</h5>
            {children}
        </div>
    );
};

export default ResumeExperience;
